import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/data/logo';
import menus from '../../assets/data/menu';
import Button from '../button/ButtonOne';

const Header = () => {
    const [ scroll, setScroll ]  = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 100);
        });

        return () => { setScroll({}); };
    }, []);

    const [menuActive, setMenuActive] = useState(null);
    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header id='header_main' className={`header js-header ${ scroll ? 'is-fixed' : '' }`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                            <div className="header__logo">
                                <Link to='/'>
                                    <img src={ logo } id="site-logo" alt="" />
                                </Link>
                            </div>
                            <div className="header__right">
                                <nav id="main-nav" className={ `main-nav ${menuActive ? 'active' : ''}` }>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((item, index) => {
                                                return <li key={ index } className={ `menu-item` }>
                                                    <a href={ item.links }>{ item.name }</a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </nav>
                                <div className="button">
                                    <Button />
                                </div>
                                <div
                                    className={ `mobile-button ${ menuActive ? 'active' : '' }` }
                                    onClick={ handleMenuActive }
                                >
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
