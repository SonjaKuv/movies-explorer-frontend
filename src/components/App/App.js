import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <Layout>
            <Main />
          </Layout>
        }></Route>
        <Route path="/movies" element={
          <Layout>
            <Movies />
          </Layout>
        }></Route>
        <Route path="/saved-movies" element={
          <Layout>
            <SavedMovies />
          </Layout>
        }></Route>
        <Route path="/profile" element={
          <Layout>
            <Profile />
          </Layout>
        }></Route>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;