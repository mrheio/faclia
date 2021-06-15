import React from 'react';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox margin--m--block'>
			<h3 className='text--accent--2 margin--s--bottom'>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};
