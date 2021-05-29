import React from 'react';
import './List.scss';

export const List = (props) => {
	return (
		<div className='List'>
			<h3>{props.title}</h3>
			<ul>
				{props.listItems.map((listItem) => {
					return <li>{listItem}</li>;
				})}
			</ul>
		</div>
	);
};
