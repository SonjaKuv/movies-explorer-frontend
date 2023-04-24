import React from 'react';
import './MovieCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MovieCard({ movie, onMovieSave }) {
  const hours = Math.floor(movie.duration/60);
  const mins = Math.floor(movie.duration - hours*60);

  const currentUser = React.useContext(CurrentUserContext);

  const isSaved = false;
  // movie.saved.some(i => i._id === currentUser._id)

  const movieSaveButtonClassName = `movie-card__save-button button ${isSaved && 'movie-card__save-button_active'}`;

  const handleMovieSave = () => {
    onMovieSave(movie);
  };
    return (
      <article className='movie-card'>
        <div className='movie-card__header'>
          <div className='movie-card__info'>
            <h3 className='movie-card__title'>{movie.nameRU}</h3>
            <span className='movie-card__time'>{`${hours}ч${mins}м`}</span>
          </div>
          <button className={movieSaveButtonClassName} onClick={handleMovieSave}></button>
        </div>
        <a className='link movie-card__link' href={movie.trailerLink} target="_blank">
        <img className='movie-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
      </a>
      </article>
    )
}

export default MovieCard
