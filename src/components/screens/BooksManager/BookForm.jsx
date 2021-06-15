import React from 'react';
import { useState } from 'react';
import { LabeledButton } from '../../common/LabeledButton/LabeledButton.jsx';
import { LabeledInput } from '../../common/LabeledInput/LabeledInput.jsx';
import { UploadButton } from '../../common/UploadButton/UploadButton.jsx';
import Book from './Book';
import './BookForm.scss';

const ImageThumbnail = (props) => {
	return (
		<div className='ImageThumbnail'>
			<img className='ImageThumbnail__image' src={URL.createObjectURL(props.image)} alt='' />
			<h4>{props.image.name}</h4>
		</div>
	);
};

export const BookForm = () => {
	const [book, setBook] = useState(new Book());

	const handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = name === 'coverSrc' ? target.files[0] : target.value;

		setBook({ ...book, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const bookObject = new Book(book);
		bookObject.save();
	};

	return (
		<form onSubmit={handleSubmit}>
			<LabeledInput input label='Titlu' id='title' value={book.title} onChange={handleInputChange} />
			<LabeledInput input label='Autor' id='author' value={book.author} onChange={handleInputChange} />
			<LabeledInput input label='Genuri' id='genres' value={book.genres} onChange={handleInputChange} />
			<LabeledInput textarea label='Despre' id='about' value={book.about} onChange={handleInputChange} />
			<UploadButton name='coverSrc' label='Adauga imagine' value={book.coverSrc} onChange={handleInputChange} />
			{book.coverSrc && <ImageThumbnail image={book.coverSrc} />}
			<LabeledButton type='submit' name='submit' label='Adauga carte' />
		</form>
	);
};
