import React from 'react';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

 function SavedMovies({savedMovies, setSavedMovies, setIsInfo, setTooltipStatus, setTooltipMessage, onMovieDelete}) {
  const [searchText, setSearchText] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  const filterMovies = (text) => {
    let initialSavedMovies = JSON.parse(localStorage.getItem('savedMovies'))
    let filteredMovies = initialSavedMovies.filter(movie =>
      ((isShortMovies && movie.duration < 41) || !isShortMovies)
      && movie.nameRU.toLowerCase().includes(text.toLowerCase()));
      if (filteredMovies.length === 0) {
        setIsInfo(true);
        setTooltipStatus(false);
        setTooltipMessage('Ничего не найдено');
      } else {
        setSavedMovies(filteredMovies);
        localStorage.setItem('savedFilteredMovies', JSON.stringify(filteredMovies));
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
      <main className='main saved-movies'>
        <SearchForm
              onSubmit={handleSubmit} 
              isSubmited={isSubmited} 
              searchText={searchText} 
              setSearchText={setSearchText} 
              isShortMovies={isShortMovies} 
              setIsShortMovies={setIsShortMovies}
        />
        {isLoading && <Preloader/>}
        <MoviesCardList 
        movies={savedMovies}
        onMovieDelete={onMovieDelete}
        savedMovies={savedMovies}
        />
      </main>
    )
}

export default SavedMovies
