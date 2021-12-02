import { observer } from 'mobx-react-lite';
import React from 'react';
import toggleMenu from '../../store/toggleMenu';
import cl from './burger.module.scss';

const Burger = observer(() => {

    return (
        <div
        className={toggleMenu.active ? cl.burger + ' ' + cl._active : cl.burger}
        onClick={toggleMenu.burgerClick}></div>
    );
});

export default Burger;