import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies({setIsInfo, setTooltipStatus, setTooltipMessage, onMovieSave, onMovieDelete}) {
  const [movies, setMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        localStorage.setItem('initialMovies', JSON.stringify(movies));
      })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const filterMovies = (text) => {
    let initialMovies = JSON.parse(localStorage.getItem('initialMovies'))
    let filteredMovies = initialMovies.filter(movie =>
      ((isShortMovies && movie.duration < 41) || !isShortMovies)
      && movie.nameRU.toLowerCase().includes(text.toLowerCase()));
      if (filteredMovies.length === 0) {
        setIsInfo(true);
        setTooltipStatus(false);
        setTooltipMessage('Ничего не найдено');
      } else {
        setMovies(filteredMovies);
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmited(true);
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('shortMoviesState', isShortMovies);
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
      movies={movies} 
      onMovieSave={onMovieSave} 
      onMovieDelete={onMovieDelete}
      />
    </main>
  )
}

export default Movies
