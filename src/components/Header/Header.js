import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import user from '../../images/user.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ onClickBurger, isBurgerOpened, }) {
    const windowSize = useWindowSize();
    const path = useLocation();
    const headerClass = (path.pathname !== '/') ? 'header' : 'header header_type_dark'

    return (
        <header className={headerClass}>
            <nav className='header__navigation'>
                <div className='header__link-container header__link-container_type_film'>
                    <Logo />
                    {(path.pathname !== '/' && windowSize.innerWidth > 768) && (
                        <div className='header__link-container header__link-container_type_user-links'>
                            <Link to='/movies' className={(path.pathname === '/movies') ? ('header__link header__link_type_films link header__link_type_is-active') : ('header__link header__link_type_films link')}>
                                Фильмы
                            </Link>
                            <Link to='/saved-movies' className={(path.pathname === '/saved-movies') ? ('header__link header__link_type_films link header__link_type_is-active') : ('header__link header__link_type_films link')}>
                                Сохранённые фильмы
                            </Link>
                        </div>
                    )}
                </div>
                {(path.pathname === '/') ? (
                    <div className='header__link-container'>
                        <Link to='/sign-up' className='header__link header__link_type_register link'>
                            Регистрация
                        </Link>
                        <Link to='sign-in' className='header__link link'>
                            <button className='header__button button'>Войти</button>
                        </Link>
                    </div>
                ) : (
                    (windowSize.innerWidth > 768) ? (
                        <Link to='/profile' className='link'>
                            <button className='header__profile-button button'>Аккаунт
                                <img src={user} className='header__profile-icon' alt='Пользователь' />
                            </button>
                        </Link>
                    ) : (
                       <BurgerMenu onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened}/>
                    )
                )}

            </nav>
        </header>
    )
}

export default Header