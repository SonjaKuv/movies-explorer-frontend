import React from 'react';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

 function SavedMovies() {

    const isLoading = false;
    return (
      <main className='main saved-movies'>
        <SearchForm/>
        {isLoading && <Preloader/>}
        <MoviesCardList/>
      </main>
    )
}

export default SavedMovies