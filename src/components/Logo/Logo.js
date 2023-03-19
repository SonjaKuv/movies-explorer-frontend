import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Logo.css';

function Logo() {
        return (
            <Link to="/">
                <img className='logo link' src={logo} alt="Лого" />
            </Link>
        )
}

export default Logo