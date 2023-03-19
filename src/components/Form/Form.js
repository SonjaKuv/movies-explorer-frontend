import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Form({title, children, button, text, route, link}) {
    return (
      <main className='main form'>
        <Logo />
        <h1 className='form__title'>{title}</h1>
        <form className='form__container'>
          <fieldset className='form__fieldset'>
            {children}
          </fieldset>
          <button type="submit" className='button form__button'>{button}</button>
          <p className='form__text'>{text}
            <Link to={route} className='form__link link'>{link}</Link>
          </p>
        </form>
      </main>
    )
}

export default Form