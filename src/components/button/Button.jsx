import React from 'react';
import cl from './button.module.scss';

const Button = ({func, styles, children}) => {
    return (
        <button 
        className={cl.button}
        style={styles}
        onClick={() => func()}>
            {children}
        </button>
    );
};

export default Button;