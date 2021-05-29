import React from 'react';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};
