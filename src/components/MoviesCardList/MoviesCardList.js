
import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';
import {
  DESKTOP_MIN_WIDTH,
  DESKTOP_MOVIES_NUMBER,
  DESKTOP_ADD_MOVIES_NUMBER,
  TABLET_MIN_WIDTH,
  TABLET_MOVIES_NUMBER,
  TABLET_ADD_MOVIES_NUMBER,
  MOBILE_MOVIES_NUMBER,
  MOBILE_ADD_MOVIES_NUMBER,
} from '../../utils/constants';
import { checkIfSaved } from '../../utils/helpers';

function MoviesCardList({ movies, savedMovies, onMovieSave, onMovieDelete }) {
  const path = useLocation();
  const windowSize = useWindowSize();
  const [cardsNumber, setCardsNumber] = useState(0);
  const [addNumber, setAddNumber] = useState(0);

  useEffect(() => {
    if (windowSize.innerWidth > DESKTOP_MIN_WIDTH) {
      setCardsNumber(DESKTOP_MOVIES_NUMBER);
      setAddNumber(DESKTOP_ADD_MOVIES_NUMBER);
    } else if (windowSize.innerWidth <= DESKTOP_MIN_WIDTH && windowSize.innerWidth > TABLET_MIN_WIDTH) {
      setCardsNumber(TABLET_MOVIES_NUMBER);
      setAddNumber(TABLET_ADD_MOVIES_NUMBER);
    } else {
      setCardsNumber(MOBILE_MOVIES_NUMBER);
      setAddNumber(MOBILE_ADD_MOVIES_NUMBER);
    }
  }, [windowSize.innerWidth, movies]);

  const handleMoreClick = () => {
    setCardsNumber(cardsNumber + addNumber);
  };

  return (
    <section className='section movies-list'>

      <div className='movies-list__container'>
        {(movies) && movies.map((movie, i) =>
          <MovieCard
            key={i}
            movie={movie}
            isSaved={checkIfSaved(savedMovies, movie, path)}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
        ).slice(0, cardsNumber)}
      </div>

      {(path.pathname === '/movies' && movies.length > addNumber && cardsNumber < movies.length) && (<button className='movies-list__button button' onClick={handleMoreClick}>Ещё</button>)}

    </section>
  )

}

export default MoviesCardList;
