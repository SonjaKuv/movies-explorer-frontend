import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import user from '../../images/user.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    const path = useLocation();
    const headerClass = (path.pathname !== '/') ? 'header' : 'header header_type_dark'

    return (
        <header className={headerClass}>
            <nav className='header_navigation'>
                <div className='header_link-container header_link-container_type_film'>
                    <Logo />
                    {(path.pathname !== '/') && (
                        <div className='header_link-container header_link-container_type_user-links'>
                            <Link to='/movies' className='header_link header_link_type_films'>
                                Фильмы
                            </Link>
                            <Link to='saved-movies' className='header_link header_link_type_films'>
                                Сохранённые фильмы
                            </Link>
                        </div>
                    )}
                </div>
                {(path.pathname === '/') ? (
                    <div className='header_link-container'>
                        <Link to='/sign-out' className='header_link header_link_type_register'>
                            Регистрация
                        </Link>
                        <Link to='sign-in' className='header_link'>
                            <button className='header_button'>Войти</button>
                        </Link>
                    </div>
                ) : (
                    <Link to='/profile'>
                        <button className='header_profile-button'>Аккаунт
                            <img src={user} className='header_profile-icon' alt='Пользователь' />
                        </button>
                    </Link>
                )}

            </nav>
        </header>
    )
}

export default Header