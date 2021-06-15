import { React, useState } from 'react';
import './BooksManager.scss';
import Book from './Book.js';
import { BookForm } from './BookForm.jsx';

export const BooksManager = () => {
	return (
		<div className='BooksManager container--center'>
			<h1 className='BooksManager__title margin--m--block'>Manager de carti</h1>
			<BookForm />
		</div>
	);
};
