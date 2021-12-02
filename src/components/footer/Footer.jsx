import React from 'react';
import cl from './footer.module.scss';
import '../../App.scss';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footer__inner}>
                    <div className={cl.footer__item}>Guidelines<span> |</span></div>
                    <div className={cl.footer__item}>FAQ<span> |</span></div>
                    <div className={cl.footer__item}>Lists<span> |</span></div>
                    <div className={cl.footer__item}>API<span> |</span></div>
                    <div className={cl.footer__item}>Security<span> |</span></div>
                    <div className={cl.footer__item}>Legal<span> |</span></div>
                    <div className={cl.footer__item}>Apply to YC<span> |</span></div>
                    <div className={cl.footer__item}>Contact</div>
                </div>
            </div>
        </footer>  
    );
};

export default Footer;