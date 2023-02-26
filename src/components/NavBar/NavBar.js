import React, { Component } from 'react';
import './NavBar.css';

export class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar_list'>
                    <li className='navbar_list-item'><a className='navbar_link'>
                        О проекте
                    </a>
                    </li>
                    <li className='navbar_list-item'><a className='navbar_link'>
                        Технологии
                    </a></li>
                    <li className='navbar_list-item'><a className='navbar_link'>
                        Студент
                    </a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar