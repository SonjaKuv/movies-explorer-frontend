
import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const path = useLocation();
  const windowSize = useWindowSize();
  const [cardsNumber, setCardsNumber] = useState(12);

  useEffect(() => {
    if (windowSize.innerWidth > 768) {
      setCardsNumber(12);
    } else if (windowSize.innerWidth <= 768 && windowSize.innerWidth > 650) {
      setCardsNumber(8);
    } else {
      setCardsNumber(5);
    }
  }, [windowSize.innerWidth]);

  return (
    <section className='section movies-list'>
      <div className='movies-list__container'>
        {[...Array(cardsNumber)].map((x, i) =>
          <MovieCard key={i} />
        )}
      </div>
      {(path.pathname === '/movies') && (
      <button className='movies-list__button button'>Ещё</button>
      )}
    </section>
  )

}

export default MoviesCardList;
