import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import Praktikum from '../../images/Praktikum.png';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header_navigation'>
                <a href='#' className='header_link'>
                    <img className='header_logo' src={logo} />
                </a>
                <div className='header_link-container'>
                    <a className='header_link header_link_type_register'>
                        Регистрация
                    </a>
                    <a className='header_link'>
                        <button className='header_button'>Войти</button>
                    </a>
                </div>
            </nav>
            <div className='header_banner'>
                <img className='header_image' src={Praktikum} />
                <h1 className='header_title'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </header>
    )
}

export default Header