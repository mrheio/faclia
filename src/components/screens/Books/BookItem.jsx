import React, { useState } from 'react';
import './BookItem.scss';

export const BookItem = () => {
	const [areDetailsShown, setAreDetailsShown] = useState(false);
	const onShowDetailsHandle = () => {
		setAreDetailsShown((areDetailsShown) => !areDetailsShown);
	};

	return (
		<div className='BookItem'>
			<img
				src='https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png'
				alt=''
			/>
			<div className='BookItem__info'>
				<h2>Titlu</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam quas voluptatibus quo
					dolores aspernatur iure atque nam ad commodi?
					{areDetailsShown ? (
						' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsam cumque ea fuga. Deserunt quas vitae repellat neque, voluptatibus nemo iusto nam deleniti facere itaque quidem hic libero voluptatum id?'
					) : (
						<a onClick={onShowDetailsHandle}>...</a>
					)}
				</p>
			</div>
		</div>
	);
};
