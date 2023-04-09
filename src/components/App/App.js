import React from 'react';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useNavigate();

  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
        auth.getProfile(jwt).then((res) => {
            if (res.data._id) {
                setEmail(res.data.email);
                history('/');
                setLoggedIn(true);
            }
        })
            .catch((err) => {
                console.log(err);
                setLoggedIn(false);
            });
    }
}, []);

// React.useEffect(() => {
//   mainApi.getUserInfo()
//       .then((userData) => {
//           setCurrentUser(userData);
//       })
//       .catch((err) => {
//           console.log(err);
//       });
// }, []);

React.useEffect(() => {
  moviesApi.getMovies()
      .then((movies) => {
          setMovies(movies);
      })
      .catch((err) => {
          console.log(err);
      });
}, []);

const onClickBurger = (checked) => {
    setIsBurgerOpened(checked);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Routes>
        <Route path="/" element={
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <Main />
          </Layout>
        }></Route>
        <Route path="/movies" element={
          // <ProtectedRoute loggedIn={loggedIn}>
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <Movies movies={movies}/>
          </Layout>
          // </ProtectedRoute>
        }></Route>
        <Route path="/saved-movies" element={
          // <ProtectedRoute loggedIn={loggedIn}>
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <SavedMovies />
          </Layout>
          // </ProtectedRoute>
        }></Route>
        <Route path="/profile" element={
          //  <ProtectedRoute loggedIn={loggedIn}>
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <Profile />
          </Layout>
          // </ProtectedRoute>
        }></Route>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;