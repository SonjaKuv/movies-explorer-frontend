import React, { Component } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

export default class Movies extends Component {
  render() {

    const isLoading = false;
    return (
      <main className='main movies'>
        <SearchForm/>
        {isLoading && <Preloader/>}
        <MoviesCardList/>
      </main>
    )
  }
}
