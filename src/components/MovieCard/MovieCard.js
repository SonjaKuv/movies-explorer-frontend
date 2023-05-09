import React from 'react';
import './MovieCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MovieCard({ movie, onMovieSave, onMovieDelete }) {
  let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
  const path = useLocation();

  const [isSaved, setIsSaved] = useState(savedMovies.some((m) => (path.pathname === "/movies") ? (m.movieId === movie.id) : (m.movieId === movie.movieId)));

  const hours = Math.floor(movie.duration / 60);
  const mins = Math.floor(movie.duration - hours * 60);
  const movieSaveButtonClassName = `movie-card__save-button button ${isSaved && 'movie-card__save-button_active'}`;

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
          <span className='movie-card__time'>{`${hours}ч${mins}м`}</span>
        </div>
        <button className={movieSaveButtonClassName} onClick={() => handleClick(movie)}></button>
      </div>
      <a className='link movie-card__link' href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='movie-card__image' src={path.pathname === "/movies" ?
          `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} />
      </a>
    </article>
  )
}

export default MovieCard
