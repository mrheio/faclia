import { React, useState } from 'react';
import { LabeledButton } from '../../common/LabeledButton/LabeledButton.jsx';
import { LabeledInput } from '../../common/LabeledInput/LabeledInput.jsx';
import './BooksManager.scss';
import Book from './Book.js';
import { UploadButton } from '../../common/UploadButton/UploadButton.jsx';
import { supabase } from './../../../supabaseClient';

export const BooksManager = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [genres, setGenres] = useState('');
	const [cover, setCover] = useState(null);

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleAuthorChange = (event) => {
		setAuthor(event.target.value);
	};

	const handleGenresChange = (event) => {
		setGenres(event.target.value);
	};

	const handleFile = (file) => {
		setCover(file);
	};

	const addBook = () => {
		const book = new Book(title, author, genres, cover);
		book.save();
	};

	return (
		<div className='BooksManager'>
			<h1>Manager de carti</h1>
			<LabeledInput id='bookTitle' label='Title' onChange={handleTitleChange} />
			<LabeledInput id='bookAuthor' label='Author' onChange={handleAuthorChange} />
			<LabeledInput id='bookGenres' label='Genres' onChange={handleGenresChange} />
			<UploadButton handleFile={handleFile} />
			<LabeledButton label='Add book' onClick={addBook} />
		</div>
	);
};
