import React, { Component } from 'react'
import './Promo.css';
import Praktikum from '../../images/Praktikum.png';

export class Promo extends Component {

    render() {
        return (
            <section className='section promo'>
                <img className='promo_image' src={Praktikum} alt='Практикум'/>
                <h1 className='title promo_title'>Учебный проект студента факультета Веб-разработки.</h1>
            </section>
        )
    }
}

export default Promo