import { faAddressBook, faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
	return (
		<header className='Header'>
			<nav className='Header__nav'>
				<ul>
					<li>
						<Link to='/'>
							<FontAwesomeIcon icon={faHome} />
						</Link>
					</li>
					<li>
						<Link to='/books'>
							<FontAwesomeIcon icon={faBook} />
						</Link>
					</li>
					<li>
						<Link to='/books-manager'>
							<FontAwesomeIcon icon={faAddressBook} />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
