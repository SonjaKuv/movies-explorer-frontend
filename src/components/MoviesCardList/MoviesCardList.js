
import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, onMovieSave, onMovieDelete }) {
  const path = useLocation();
  const windowSize = useWindowSize();
  const [cardsNumber, setCardsNumber] = useState(0);
  const [addNumber, setAddNumber] = useState(0);

  useEffect(() => {
    if (windowSize.innerWidth > 768) {
      setCardsNumber(12);
      setAddNumber(3);
    } else if (windowSize.innerWidth <= 768 && windowSize.innerWidth > 650) {
      setCardsNumber(8);
      setAddNumber(2);
    } else {
      setCardsNumber(5);
      setAddNumber(2);
    }
  }, [windowSize.innerWidth]);

  const handleMoreClick = () => {
    setCardsNumber(cardsNumber + addNumber);
  };

  return (
    <section className='section movies-list'>

      <div className='movies-list__container'>
        {movies.map((movie, i) =>
          <MovieCard
            key={i}
            movie={movie}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
        ).slice(0, cardsNumber)}
      </div>

      {(path.pathname === '/movies' && movies.length > addNumber && cardsNumber !== movies.length) && (<button className='movies-list__button button' onClick={handleMoreClick}>Ещё</button>)}

    </section>
  )

}

export default MoviesCardList;
