import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

const onClickBurger = (checked) => {
    setIsBurgerOpened(checked);
  }

  return (
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
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <Movies />
          </Layout>
        }></Route>
        <Route path="/saved-movies" element={
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <SavedMovies />
          </Layout>
        }></Route>
        <Route path="/profile" element={
          <Layout
            onClickBurger={onClickBurger}
            isBurgerOpened={isBurgerOpened}>
            <Profile />
          </Layout>
        }></Route>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;