import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Logo.css';

export class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <img className='logo' src={logo} alt="Лого" />
            </Link>
        )
    }
}

export default Logo