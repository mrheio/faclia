import { faAddressBook, faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Menu } from '../Menu/Menu.jsx';
import './Header.scss';

const navigationOptions = [faHome, faBook, faAddressBook];

export const Header = () => {
	return (
		<header className='Header'>
			<nav className='Header__nav'>
				<Menu options={navigationOptions} areIcons={true} />
			</nav>
		</header>
	);
};
