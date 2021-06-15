import React, { useEffect } from 'react';
import { useState } from 'react';
import { LabeledButton } from '../LabeledButton/LabeledButton.jsx';
import './UploadButton.scss';

export const UploadButton = (props) => {
	const hiddenFileInput = React.useRef(null);

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	return (
		<div>
			<LabeledButton type='button' label={props.label} onClick={handleClick} />
			<input type='file' name={props.name} ref={hiddenFileInput} onChange={props.onChange} hidden />
		</div>
	);
};
