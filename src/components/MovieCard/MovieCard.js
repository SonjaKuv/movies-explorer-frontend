import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onMovieSave, onMovieDelete, savedMovies }) {
  const hours = Math.floor(movie.duration / 60);
  const mins = Math.floor(movie.duration - hours * 60);
console.log(savedMovies);
  const isOwn = false;
  // (savedMovies !== []) ? (savedMovies.includes((sm) => sm._id === movie._id)) : false; 
  const movieSaveButtonClassName = `movie-card__save-button button ${isOwn && 'movie-card__save-button_active'}`;

  const handleClick = (movie) => {
    if (isOwn) {
      onMovieDelete(movie);
    } else {
      onMovieSave(movie);
    }
  }

  return (
    <article className='movie-card'>
      <div className='movie-card__header'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>{movie.nameRU}</h3>
          <span className='movie-card__time'>{`${hours}ч${mins}м`}</span>
        </div>
        <button className={movieSaveButtonClassName} onClick={handleClick}></button>
      </div>
      <a className='link movie-card__link' href={movie.trailerLink} target="_blank">
        <img className='movie-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
      </a>
    </article>
  )
}

export default MovieCard
