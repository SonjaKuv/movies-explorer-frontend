import React, { Component } from 'react';
import './MovieCard.css';
import poster from '../../images/movie.png';
import save from '../../images/save.svg';

export default class MovieCard extends Component {
  render() {
    return (
      <article className='movie-card'>
        <div className='movie-card_header'>
          <div className='movie-card_info'>
            <h3 className='movie-card_title'>33 слова о дизайне</h3>
            <span className='movie-card_time'>1ч 47м</span>
          </div>
          <img className='movie-card_save-icon' src={save} alt='Сохранить' />
        </div>
        <img className='movie-card_image' src={poster} alt='Постер' />
      </article>
    )
  }
}
