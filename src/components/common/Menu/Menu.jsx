import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Menu.scss';

export const Menu = (props) => {
	const menuClasses = 'Menu';
	return (
		<ul className={menuClasses}>
			{props.options.map((option) => {
				return (
					<li className='Menu__option'>
						<a href=''>
							{props.areIcons ? (
								<h1>
									<FontAwesomeIcon icon={option} />
								</h1>
							) : (
								option
							)}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
