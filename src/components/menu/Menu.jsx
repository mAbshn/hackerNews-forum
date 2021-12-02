import { observer } from 'mobx-react-lite';
import React from 'react';
import toggleMenu from '../../store/toggleMenu';
import Nav from '../navigation/Nav';
import cl from './menu.module.scss';

const Menu = observer(() => {
	return (
		<nav className={toggleMenu.active ? cl.menu + ' ' + cl._active : cl.menu}>
			<Nav />
			<button className={cl.menu__login}>Login</button>
		</nav>
	);
});

export default Menu;
