import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';

function Movies({setMovies, setIsInfo, setTooltipStatus, setTooltipMessage, isLoading, onMovieSave, onMovieDelete}) {
  const path = useLocation();

  const [searchText, setSearchText] = React.useState(localStorage.searchText);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(JSON.parse(localStorage.shortMoviesState));


  const filterMovies = (text) => {
    let initialMovies = JSON.parse(localStorage.getItem('initialMovies'));
    let filteredMovies = initialMovies.filter(movie =>
      ((isShortMovies && movie.duration < 41) || !isShortMovies)
      && movie.nameRU.toLowerCase().includes(text.toLowerCase()));
      if (filteredMovies.length === 0) {
        setIsInfo(true);
        setTooltipStatus(false);
        setTooltipMessage('Ничего не найдено');
      } else {
        setMovies(filteredMovies);
        localStorage.filteredMovies = JSON.stringify(filteredMovies);
    }
  }

 
 const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmited(true);
    if (path.pathname === '/movies') {
    localStorage.searchText = searchText;
    localStorage.shortMoviesState = JSON.stringify(isShortMovies);
    }

    filterMovies(searchText);
  }

  return (
    <main className='main movies'>
      <SearchForm 
      onSubmit={handleSubmit} 
      isSubmited={isSubmited} 
      searchText={searchText} 
      setSearchText={setSearchText} 
      isShortMovies={isShortMovies} 
      setIsShortMovies={setIsShortMovies} />
      {isLoading && <Preloader />}
      <MoviesCardList 
      movies={JSON.parse(localStorage.filteredMovies)} 
      onMovieSave={onMovieSave} 
      onMovieDelete={onMovieDelete}
      />
    </main>
  )
}

export default Movies
