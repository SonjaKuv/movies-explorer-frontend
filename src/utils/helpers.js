export const calculateDuration = (duration) => {
    let hours = Math.floor(duration / 60);
    let mins = Math.floor(duration - hours * 60);
    return (hours && hours + 'ч') + mins + 'м';
}

export const checkIfSaved = (savedMovies, movie, path) => {
  return savedMovies.some((m) => 
   (path.pathname === "/movies") ? (m.movieId === movie.id) : (m.movieId === movie.movieId));
}

export const findSavedMovieID = (savedMovies, movie, path) => {
    let movieFromSaveArray = savedMovies.find((m) => 
    (path.pathname === "/movies") ? (m.movieId === movie.id) : (m.movieId === movie.movieId));
    return movieFromSaveArray._id;
}