import React from 'react';
import './LabeledButton.scss';

export const LabeledButton = (props) => {
	return (
		<button className='LabeledButton' onClick={props.onClick}>
			<h3 className='LabeledButton__label'>{props.label}</h3>
		</button>
	);
};
