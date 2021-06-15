import React from 'react';
import './LabeledButton.scss';

export const LabeledButton = (props) => {
	return (
		<button type={props.type} className='LabeledButton margin--m padding--s' onClick={props.onClick}>
			<span className='heading--5'>{props.label}</span>
		</button>
	);
};
