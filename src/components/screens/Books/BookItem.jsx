import React, { useState } from 'react';
import './BookItem.scss';

export const BookItem = (props) => {
	return (
		<div className='BookItem'>
			<img src={props.coverSrc} alt='' />
			<div className='BookItem__info'>
				<h2>{props.title}</h2>
				<h4>by {props.author}</h4>
				<h5>Genres: {props.genres}</h5>
				<p>{props.about}</p>
			</div>
		</div>
	);
};
