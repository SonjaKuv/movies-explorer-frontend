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
  const history = useNavigate();

  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      mainApi.getUser(jwt).then((res) => {
        console.log(res.data);
        if (res.data._id) {
          setCurrentUser(res.data);
          setEmail(res.data.email);
          history('/');
          setLoggedIn(true);
        }
      })
        .catch((err) => {
          setTooltipStatus(false);
          setTooltipMessage('Во время запроса произошла ошибка.' + err.message);
          setIsInfo(true);
          setLoggedIn(false);
        });
    }
  }, []);

  // Регистрация, авторизация и выход
  const handleLogin = (email, password) => {
    mainApi.login(email, password)
      .then((res) => {
        setLoggedIn(true);
        setEmail(email);
        setPassword(password);
        localStorage.setItem('token', res.token);
        history('/');
      })
      .catch((err) => {
        console.log(err);
        setTooltipStatus(false);
        setTooltipMessage('Во время запроса произошла ошибка.' + err.message);
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
        setEmail('');
        setPassword('');
      }).catch((err) => {
        console.log(err);
        setTooltipStatus(false);
        setTooltipMessage('Во время запроса произошла ошибка.' + err);
      })
      .finally(() => {
        setIsInfo(true);
      })
  };

  const handleSignout = () => {
    localStorage.removeItem('token');
    setEmail('');
    setPassword('');
    setLoggedIn(false);
    setCurrentUser({});
  };

  const handleMovieSave = (movie) => {
    const isSaved = false;
    // movie.likes.some(i => i._id === currentUser._id);

    mainApi.createMovie(movie._id, isSaved)
      .then((savedMovie) => {
        setSavedMovies((state) => state.map((c) => c._id === movie._id ? savedMovie : c));
      })
      .catch((err) => {
        console.log(err);
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
        <Routes>
          <Route path="/" element={
            <Layout
              onClickBurger={onClickBurger}
              isBurgerOpened={isBurgerOpened}>
              <Main />
            </Layout>
          }></Route>
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Layout
                onClickBurger={onClickBurger}
                isBurgerOpened={isBurgerOpened}>
                <Movies
                  setIsInfo={setIsInfo}
                  onMovieSave={handleMovieSave}
                  setTooltipStatus={setTooltipStatus}
                  setTooltipMessage={setTooltipMessage}
                />
              </Layout>
            </ProtectedRoute>
          }></Route>
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Layout
                onClickBurger={onClickBurger}
                isBurgerOpened={isBurgerOpened}>
                <SavedMovies
                  savedMovies={savedMovies} />
              </Layout>
            </ProtectedRoute>
          }></Route>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Layout
                onClickBurger={onClickBurger}
                isBurgerOpened={isBurgerOpened}>
                <Profile />
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