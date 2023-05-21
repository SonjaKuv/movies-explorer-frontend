import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import { SHORT_MOVIES_DURATION } from '../../utils/constants';

function Movies({ savedMovies, setIsInfo, setTooltipStatus, setTooltipMessage, onMovieSave, onMovieDelete }) {
  const path = useLocation();
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [moviesLoading, setMoviesLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState(localStorage.searchText);
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(JSON.parse(localStorage.shortMoviesState));

  React.useEffect(() => {
    if (localStorage.filteredMovies) {
      setFilteredMovies(JSON.parse(localStorage.filteredMovies))
    }
  }, []);

  // запрос всех фильмов
  const getMovies = async () => {
    setMoviesLoading(true);
    await moviesApi.getMovies()
      .then((movies) => {
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
    let filter = initialMovies.filter(movie =>
      ((isShortMovies && movie.duration <= SHORT_MOVIES_DURATION) || !isShortMovies)
      && movie.nameRU.toLowerCase().includes(text.toLowerCase()));
    if (filter.length === 0) {
      setIsInfo(true);
      setTooltipStatus(false);
      setTooltipMessage('Ничего не найдено');
    } else {
      setFilteredMovies(filter);
      localStorage.filteredMovies = JSON.stringify(filter);
    }
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    (!localStorage.initialMovies) && await getMovies(); // запрашиваем фильмы только если это первый поиск
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
        movies={filteredMovies}
        savedMovies={savedMovies}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
      />
    </main>
  )
}

export default Movies
