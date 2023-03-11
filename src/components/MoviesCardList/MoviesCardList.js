
import React, { Component } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

export default class MoviesCardList extends Component {
  render() {
    return (
      <section className='section movies-list'>
        <div className='movies-list_container'> 
        {[...Array(12)].map((x, i) =>
          <MovieCard key={i} />
        )}
        </div>
        <button className='movies-list_button'>Ещё</button>
      </section>
    )
  }
}
