import React from 'react'
import className from './Header.scss'

const Header = () => {
    return( 
        <div>
            <header>
        <div className="logo"><p>TRELLO</p></div>

        <nav>
            <ul className="nav__links">
                <li><a href="!#">Возможности</a></li>
                <li><a href="!#">Блог</a></li>
                <li><a href="!#">О нас</a></li>
            </ul>
        </nav>

        <div className="header__login">
            <a className="sign_in" href="!#">Войти</a>
            <a className="sign_up" href="!#">Регистрация</a>
        </div>
    </header>

    <hr/>
        </div>
    
    )};

export default Header;