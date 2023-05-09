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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInfo, setIsInfo] = React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState(false);
  const [tooltipMessage, setTooltipMessage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useNavigate();
  const path = useLocation();

  // запрос данных данного пользователя
  React.useEffect(() => {
    setIsLoading(true);
    mainApi
    .getUser()
    .then((res) => {
      if (res._id) {
        setCurrentUser(res);
        setUserName(res.name);
        setEmail(res.email);
        history(path.pathname);
        setLoggedIn(true);
      }
    })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
        setLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  // хандлер для установки новой информации о пользователе
  const handleNewInfo = () => {
    setIsLoading(true);
    mainApi
      .setNewUserInfo(userName, email)
      .then((res) => {
        setCurrentUser(res);
        setTooltipStatus(true);
        setTooltipMessage('Ваши данные обновлены!');
        setIsInfo(true);
      })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Регистрация, авторизация и выход
  const handleLogin = (email, password) => {
    mainApi.login(email, password)
      .then((res) => {
        setLoggedIn(true);
        setEmail(email);
        setPassword(password);
        localStorage.setItem('token', res.token);
        history('/movies');
      })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
      });
  };

  const handleRegister = (userName, email, password) => {
    mainApi.createUser(userName, email, password)
      .then((res) => {
        setTooltipStatus(true);
        setTooltipMessage('Вы успешно зарегистрировались!');
        history('/sign-in');
      })
      .then((res) => {
        setUserName('');
        setEmail('');
        setPassword('');
      }).catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
      })
      .finally(() => {
        setIsInfo(true);
      })
  };

  const handleSignout = () => {
    localStorage.removeItem('token');
    setEmail('');
    setPassword('');
    setUserName('');
    setLoggedIn(false);
    setCurrentUser({});
  };

//  фильмы данного пользователя
  React.useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies.data);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies.data));
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

 // хандлеры сохранения и удаления фильмов пользователя
  const handleMovieSave = (movie) => {
    mainApi.createMovie(movie)
      .then((movie) => {
        setSavedMovies([movie.data, ...savedMovies]);
        localStorage.savedMovies = JSON.stringify([movie.data, ...savedMovies]);
      })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
      });
  }

  const handleMovieUnsave = (id) => {
    mainApi.deleteMovie(id)
      .then((deletedMovie) => {
        let changedMoviesList = savedMovies.filter((savedMovie) => savedMovie._id !== deletedMovie._id);
        setSavedMovies(changedMoviesList);
        localStorage.savedMovies = JSON.stringify(changedMoviesList);
      })
      .catch((err) => {
        setTooltipStatus(false);
        setTooltipMessage('Произошла ошибка. ' + err.message);
        setIsInfo(true);
      });
  }

  const onClickBurger = (checked) => {
    setIsBurgerOpened(checked);
  }

  const closePopup = () => {
    setIsInfo(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={
              <Layout loggedIn={loggedIn}
                onClickBurger={onClickBurger}
                isBurgerOpened={isBurgerOpened}>
                <Main />
              </Layout>
            }></Route>
            <Route path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Layout loggedIn={loggedIn}
                  onClickBurger={onClickBurger}
                  isBurgerOpened={isBurgerOpened}>
                  <Movies
                    setIsInfo={setIsInfo}
                    onMovieSave={handleMovieSave}
                    onMovieDelete={handleMovieUnsave}
                    setTooltipStatus={setTooltipStatus}
                    setTooltipMessage={setTooltipMessage}
                  />
                </Layout>
              </ProtectedRoute>
            }></Route>
            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Layout loggedIn={loggedIn}
                  onClickBurger={onClickBurger}
                  isBurgerOpened={isBurgerOpened}>
                  <SavedMovies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                    setIsInfo={setIsInfo}
                    onMovieDelete={handleMovieUnsave}
                    setTooltipStatus={setTooltipStatus}
                    setTooltipMessage={setTooltipMessage}
                    />
                </Layout>
              </ProtectedRoute>
            }></Route>
            <Route path="/profile" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Layout loggedIn={loggedIn}
                  onClickBurger={onClickBurger}
                  isBurgerOpened={isBurgerOpened}>
                  <Profile
                    handleSignout={handleSignout}
                    userName={userName}
                    email={email}
                    setUserName={setUserName}
                    setEmail={setEmail}
                    handleNewInfo={handleNewInfo} />
                </Layout>
              </ProtectedRoute>
            }></Route>
            <Route path="/sign-up" element={
              <Register
                onRegister={handleRegister}
                email={email}
                password={password}
                userName={userName}
                setEmail={setEmail}
                setPassword={setPassword}
                setUserName={setUserName} />} />
            <Route path="/sign-in" element={
              <Login
                onLogin={handleLogin}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword} />}
            />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        )}
        <InfoTooltip
          isOpen={isInfo}
          status={tooltipStatus}
          tooltipMessage={tooltipMessage}
          onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;