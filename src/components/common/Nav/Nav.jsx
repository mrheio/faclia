import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
	return (
		<nav className='Nav'>
			<ul className='Nav__list'>
				<li>
					<Link to='/'>Acasa</Link>
				</li>
				<li>
					<Link to='/books'>Carti</Link>
				</li>
				<li>
					<Link to='/books-manager'>
						Adauga <br /> carte
					</Link>
				</li>
			</ul>
		</nav>
	);
};
