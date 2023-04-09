import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

function Movies() {

    const isLoading = false;
    return (
      <main className='main movies'>
        <SearchForm/>
        {isLoading && <Preloader/>}
        <MoviesCardList/>
      </main>
    )
  }

export default Movies
