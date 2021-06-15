import { React, useEffect, useState } from 'react';
import { BookItem } from './BookItem.jsx';
import './Books.scss';
import DbService from '../../../utils/services/DbService.js';
import StorageService from '../../../utils/services/StorageService.js';
import MediaUtils from '../../../utils/MediaUtils.js';

export const Books = () => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const books = await DbService.getBooks();
		for (let i = 0; i < books.length; i++) {
			books[i]['cover'] = await fetchCover(books[i]);
		}
		return books;
	};

	const fetchCover = async (book) => {
		let imageBlob = await StorageService.get('books', book.coverPath);
		return MediaUtils.toImage(imageBlob);
	};

	useEffect(() => {
		fetchBooks().then((books) => {
			setBooks(books);
		});
	}, []);

	return (
		<div className='Books'>
			<div className='Books__list container--center'>
				{books.map((book) => {
					const { title, author, genres, about, cover } = book;
					return <BookItem coverSrc={cover} title={title} author={author} genres={genres} about={about} />;
				})}
			</div>
		</div>
	);
};
