import React from 'react';
import './LabeledInput.scss';

export const LabeledInput = (props) => {
	return (
		<div className='LabeledInput'>
			<label htmlFor={props.id} className='LabeledInput__label'>
				{props.label}
			</label>
			<input type='text' id={props.id} className='LabeledInput__input' onChange={props.onChange} />
		</div>
	);
};
