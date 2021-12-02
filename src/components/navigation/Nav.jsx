import React from 'react';
import cl from './nav.module.scss';

const Nav = () => {
	return (
		<ul className={cl.nav}>
			<li className={cl.nav__item + ' ' + cl._active}>New</li>
			<li className={cl.nav__item}>Past</li>
			<li className={cl.nav__item}>Comments</li>
			<li className={cl.nav__item}>Ask</li>
			<li className={cl.nav__item}>Show</li>
			<li className={cl.nav__item}>Jobs</li>
			<li className={cl.nav__item}>Submit</li>
		</ul>
	);
};

export default Nav;
