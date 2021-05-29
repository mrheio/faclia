import React from 'react';
import './LabeledButton.scss';

export const LabeledButton = (props) => {
	return (
		<button className='LabeledButton'>
			<h3 className='LabeledButton__label'>{props.action}</h3>
		</button>
	);
};
