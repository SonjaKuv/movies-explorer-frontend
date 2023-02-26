import React, { Component } from 'react';
import './Portfolio.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';

export default class Portfolio extends Component {
    render() {
        return (
            <section className='section portfolio'>
                <h3 className='portfolio_title'>Портфолио</h3>
                <div className='portfolio_container'>
                    <PortfolioLink link='https://github.com/SonjaKuv/how-to-learn' name='Статичный сайт' />
                    <PortfolioLink link='https://github.com/SonjaKuv/travel-in-russia' name='Адаптивный сайт' />
                    <PortfolioLink link='https://github.com/SonjaKuv/react-mesto-auth' name='Одностраничное приложение' />
                </div>
            </section>
        )
    }
}
