import React from 'react';
import './NavBar.css';

function NavBar({ handleScroll }) {

    const handleButtonClick = (target) => {
        handleScroll(target)
    };
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <button className='navbar__button button' data='.about' onClick={() => handleButtonClick('.about')}>
                        О проекте
                    </button>
                </li>
                <li className='navbar__list-item'>
                    <button className='navbar__button button' onClick={() => handleButtonClick('.techs')}>
                        Технологии
                    </button>
                </li>
                <li className='navbar__list-item'>
                    <button className='navbar__button button' onClick={() => handleButtonClick('.about-me')}>
                        Студент
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar