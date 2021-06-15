import React, { useState } from 'react';
import './BookItem.scss';

export const BookItem = (props) => {
	return (
		<div className='BookItem padding--s'>
			<img src={props.coverSrc} alt='' />
			<div className='BookItem__info'>
				<h2 className='text--accent--2 margin--s--bottom'>{props.title}</h2>
				<div className='margin--m--bottom'>
					<h4>
						de <span className='text--accent--1'>{props.author}</span>
					</h4>
					<h5>
						Genuri: <span className='text--accent--1'>{props.genres}</span>
					</h5>
				</div>
				<p>{props.about}</p>
			</div>
		</div>
	);
};
