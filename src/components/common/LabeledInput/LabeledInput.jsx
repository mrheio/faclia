import React from 'react';
import './LabeledInput.scss';

export const LabeledInput = (props) => {
	const inputClasses = 'LabeledInput__input margin--m--bottom padding--s';
	return (
		<div className='LabeledInput'>
			<label htmlFor={props.id} className='LabeledInput__label margin--s--bottom'>
				{props.label}
			</label>
			{props.input && (
				<input
					type='text'
					id={props.id}
					name={props.id}
					className={inputClasses}
					value={props.value}
					onChange={props.onChange}
				/>
			)}
			{props.textarea && (
				<textarea
					id={props.id}
					name={props.id}
					className={`${inputClasses} LabeledInput__textarea`}
					value={props.value}
					onChange={props.onChange}
				></textarea>
			)}
		</div>
	);
};
