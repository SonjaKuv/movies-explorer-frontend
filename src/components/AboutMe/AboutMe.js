import React, { Component } from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/photo.png';

export default class AboutMe extends Component {
  render() {
    return (
      <section className='section about-me'>
        <SectionTitle title='Студент' />
        <div className='about-me_container'>
          <div className='about-me_info'>
            <h2 className='title about-me_title'>Виталий</h2>
            <h3 className='about-me_subtitle'>Фронтенд-разработчик, 30 лет</h3>
            <p className='about-me_description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='about-me_link' href='https://github.com/SonjaKuv'>Github</a>
          </div>
          <img className='about-me_photo' src={photo} />
        </div>
      </section>
    )
  }
}
