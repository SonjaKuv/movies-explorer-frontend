import React from 'react';
import './MovieCard.css';
import poster from '../../images/movie.png';

function MovieCard() {
    return (
      <article className='movie-card'>
        <div className='movie-card__header'>
          <div className='movie-card__info'>
            <h3 className='movie-card__title'>33 слова о дизайне</h3>
            <span className='movie-card__time'>1ч 47м</span>
          </div>
          <button className='movie-card__save-button button'></button>
        </div>
        <img className='movie-card__image' src={poster} alt='Постер' />
      </article>
    )
}

export default MovieCard
