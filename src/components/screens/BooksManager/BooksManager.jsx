import React from 'react';
import { LabeledButton } from '../../common/LabeledButton/LabeledButton.jsx';
import { LabeledInput } from '../../common/LabeledInput/LabeledInput.jsx';
import './BooksManager.scss';

export const BooksManager = () => {
	return (
		<div className='BooksManager'>
			<LabeledInput id='bookTitle' label='Title' />
			<LabeledInput id='bookAuthor' label='Author' />
			<LabeledInput id='bookReleaseDate' label='Release date' />
			<LabeledInput id='bookGenres' label='Genres' />
			<LabeledButton label='Add book' />
		</div>
	);
};
