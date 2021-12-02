import React from 'react';
import logo from '../../img/logo.jpg';
import cl from './logo.module.scss';

const Logo = () => {
	return (
		<div className={cl.logo}>
			<div className={cl.logo__img}>
				<img src={logo} alt='logo'></img>
			</div>
			<div className={cl.logo__name}>Hacker News</div>
		</div>
	);
};

export default Logo;
