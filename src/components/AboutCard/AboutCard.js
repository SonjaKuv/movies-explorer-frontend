import React from 'react';
import './AboutCard.css';

function AboutCard({title, description}) {
        return (
            <div className='about-card'>
                <h3 className='about-card__title'>{title}</h3>
                <p className='subtitle about-card__description'>{description}</p>
            </div>
        )
}

export default AboutCard
