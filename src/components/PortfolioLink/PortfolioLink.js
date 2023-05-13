import React from 'react';
import './PortfolioLink.css';
import arrow from '../../images/arrow.svg';

function PortfolioLink({link, name}) {
    return (
      <a className='portfolio-link' href={link} target="_blank" rel="noreferrer">
        <div className='portfolio-link__container link'>
             <h3 className='portfolio-link__title'>{name} </h3> 
             <img className='portfolio-link__icon' src={arrow} alt='Стрелка'/> 
        </div>
    
      </a>
    )
}

export default PortfolioLink
