import React, { Component } from 'react';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

export default class SavedMovies extends Component {
  render() {

    const isLoading = false;
    return (
      <main className='main saved-movies'>
        <SearchForm/>
        {isLoading && <Preloader/>}
        <MoviesCardList/>
      </main>
    )
  }
}
