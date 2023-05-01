import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/photo.jpg';

function AboutMe(){
    return (
      <section className='section about-me'>
        <SectionTitle title='Студент' />
        <div className='about-me__container'>
          <div className='about-me__info'>
            <h2 className='title about-me__title'>Софья</h2>
            <h3 className='about-me__subtitle'>Fullstack-разработчик, 24 года</h3>
            <p className='about-me__description'>Я родилась в Тольятти. Сейчас живу в подмосковном городе Фрязино, закончила РХТУ им. Менделеева в 2021 году по специальности "Фундаментальная и прикладная химия". 
            После того, как прошла курс по веб-разработке, устроилась fullstack-разработчиком в компанию «Лакки Проект».
           </p>
            <a className='about-me__link link' href='https://github.com/SonjaKuv' target="_blank">Github</a>
          </div>
          <img className='about-me__photo' src={photo} alt='Фото'/>
        </div>
      </section>
    )
}

export default AboutMe