import React from 'react';
import './MovieCard.css';
import { useLocation } from 'react-router-dom';
import { calculateDuration } from '../../utils/helpers';

function MovieCard({ movie, isSaved, onMovieSave, onMovieDelete }) {
  const path = useLocation();

  const movieSaveButtonClassName = `movie-card__save-button button ${isSaved && 'movie-card__save-button_active'}`;

  const handleClick = (movie) => {
    if (!isSaved) {
      onMovieSave(movie);
    } else {
      onMovieDelete(movie);
    }
  }

  return (
    <article className='movie-card'>
      <div className='movie-card__header'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>{movie.nameRU}</h3>
          <span className='movie-card__time'>{calculateDuration(movie.duration)}</span>
        </div>
        {path.pathname === '/movies' && (
          <button className={movieSaveButtonClassName} onClick={() => handleClick(movie)}></button>
        )}
        {path.pathname === '/saved-movies' && (
          <button className="movie-card__unsave-button button" onClick={() => onMovieDelete(movie)}></button>
        )}
      </div>
      <a className='link movie-card__link' href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='movie-card__image' src={path.pathname === "/movies" ?
          `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} />
      </a>
    </article>
  )
}

export default MovieCard
