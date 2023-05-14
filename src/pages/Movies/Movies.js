import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';

function Movies({ movies, setMovies, setIsInfo, setTooltipStatus, setTooltipMessage, onMovieSave, onMovieDelete }) {
  const path = useLocation();
  const [moviesLoading, setMoviesLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState(localStorage.searchText);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(JSON.parse(localStorage.shortMoviesState));

    // запрос всех фильмов
    const getMovies = () => {
      setMoviesLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);
          localStorage.initialMovies = JSON.stringify(movies);
        })
        .catch((err) => {
          setTooltipStatus(false);
          setTooltipMessage('Произошла ошибка. ' + err.message);
          setIsInfo(true);
        })
        .finally(() => {
          setMoviesLoading(false);
        })
    };

  const filterMovies = (text) => {
    let initialMovies = JSON.parse(localStorage.initialMovies);
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
    (!localStorage.initialMovies) && getMovies();
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
      {moviesLoading && <Preloader />}
      <MoviesCardList
        movies={movies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
      />
    </main>
  )
}

export default Movies
