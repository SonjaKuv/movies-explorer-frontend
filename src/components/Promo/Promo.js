import React from 'react'
import './Promo.css';
import Praktikum from '../../images/Praktikum.png';

function Promo() {

        return (
            <section className='section promo'>
                <img className='promo__image' src={Praktikum} alt='Практикум'/>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            </section>
        )
}

export default Promo