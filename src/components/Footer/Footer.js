import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer section'>
                <p className='text footer_text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer_container'>
                    <p className='text footer_copyright'>&copy; 2023</p>
                    <ul className='footer_links'>
                        <li>
                            <a className='text footer_link' href=''>Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a className='text footer_link' href=''>Github</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}
