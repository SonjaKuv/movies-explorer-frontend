import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const path = useLocation();

    if (path.pathname !== '/profile') {
        return (
            <footer className='footer section'>
                <p className='text footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                    <p className='text footer__copyright'>&copy; 2023</p>
                    <ul className='footer__links'>
                        <li>
                            <a className='text footer__link link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a className='text footer__link link' href='https://github.com/SonjaKuv'>Github</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    } else return (<></>)

}

export default Footer
