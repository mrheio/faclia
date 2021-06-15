import React from 'react';
import './List.scss';

export const List = (props) => {
	return (
		<div className='List margin--m--block'>
			<h3 className='text--accent--2 margin--s--bottom'>{props.title}</h3>
			<ul className='padding--s--left'>
				{props.listItems.map((listItem) => {
					return <li>{listItem}</li>;
				})}
			</ul>
		</div>
	);
};
