import React from 'react';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import "../../App.scss"
import cl from './header.module.scss';
import Burger from '../burger/Burger';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <Logo />
                    <Menu />
                    <Burger />
                </div>
            </div>
        </header>
    );
};

export default Header;