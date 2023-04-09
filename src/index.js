import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './vendor/normalize.css';
import './vendor/fonts/inter.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
