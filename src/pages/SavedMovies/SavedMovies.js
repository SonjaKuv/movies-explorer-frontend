import React from 'react';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, setIsInfo, setTooltipStatus, setTooltipMessage, onMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  React.useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  const filterMovies = (text) => {
    let filter = savedMovies.filter(movie =>
      ((isShortMovies && movie.duration < 41) || !isShortMovies)
      && movie.nameRU.toLowerCase().includes(text.toLowerCase()));
    setFilteredMovies(filter);
    if (filter.length === 0) {
      setIsInfo(true);
      setTooltipStatus(false);
      setTooltipMessage('Ничего не найдено');
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmited(true);
    filterMovies(searchText);
  }

  return (
    <main className='main saved-movies'>
      <SearchForm
        onSubmit={handleSubmit}
        isSubmited={isSubmited}
        searchText={searchText}
        setSearchText={setSearchText}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={savedMovies}
        onMovieDelete={onMovieDelete}
      />
    </main>
  )
}

export default SavedMovies
