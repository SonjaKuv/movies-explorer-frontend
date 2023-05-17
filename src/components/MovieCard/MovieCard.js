import React from 'react';
import './MovieCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { calculateDuration } from '../../utils/helpers';

function MovieCard({ movie, onMovieSave, onMovieDelete }) {
  let savedMovies = JSON.parse(localStorage.savedMovies);
  const path = useLocation();

  const [isSaved, setIsSaved] = useState(false);
  const movieSaveButtonClassName = `movie-card__save-button button ${isSaved && 'movie-card__save-button_active'}`;

  React.useEffect(() => {
    setIsSaved(savedMovies.some((m) => (path.pathname === "/movies") ? (m.movieId === movie.id) : (m.movieId === movie.movieId)));
  }, [movie]);

  const handleClick = (movie) => {
    if (!isSaved) {
      setIsSaved(true);
      onMovieSave(movie);
    } else {
      if (path.pathname === "/movies") {
        let movieFromSaveArray = savedMovies.find((m) => m.movieId === movie.id)
        onMovieDelete(movieFromSaveArray._id);
      } else {
        onMovieDelete(movie._id);
      };
      setIsSaved(false);
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
          <button className="movie-card__unsave-button button" onClick={() => handleClick(movie)}></button>
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
