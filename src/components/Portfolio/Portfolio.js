import React from 'react';
import './Portfolio.css';
import PortfolioLink from '../PortfolioLink/PortfolioLink';

function Portfolio() {
        return (
            <section className='section portfolio'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <div className='portfolio__container'>
                    <PortfolioLink link='https://github.com/SonjaKuv/how-to-learn' name='Статичный сайт' />
                    <PortfolioLink link='https://github.com/SonjaKuv/travel-in-russia' name='Адаптивный сайт' />
                    <PortfolioLink link='https://github.com/SonjaKuv/react-mesto-auth' name='Одностраничное приложение' />
                </div>
            </section>
        )
}

export default Portfolio
