import React from 'react';
import './MovieCard.css';

function MovieCard({movie}) {
  const hours = Math.floor(movie.duration/60);
  const mins = Math.floor(movie.duration - hours*60);
    return (
      <a className='link' href={movie.trailerLink} target="_blank">
      <article className='movie-card'>
        <div className='movie-card__header'>
          <div className='movie-card__info'>
            <h3 className='movie-card__title'>{movie.nameRU}</h3>
            <span className='movie-card__time'>{`${hours}ч${mins}м`}</span>
          </div>
          <button className='movie-card__save-button button'></button>
        </div>
        <img className='movie-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
      </article>
      </a>
    )
}

export default MovieCard
