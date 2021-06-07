import React from 'react';
import { useState } from 'react';
import { LabeledButton } from '../LabeledButton/LabeledButton.jsx';
import './UploadButton.scss';

export const UploadButton = (props) => {
	const hiddenFileInput = React.useRef(null);
	const [fileName, setFileName] = useState('');

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event) => {
		const uploadedFile = event.target.files[0];
		setFileName(uploadedFile.name);
		props.handleFile(uploadedFile);
	};

	return (
		<div>
			<LabeledButton label='Upload image' onClick={handleClick} />
			<h4>{fileName}</h4>
			<input type='file' ref={hiddenFileInput} onChange={handleChange} hidden />
		</div>
	);
};
