import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Form({title, children, button, text, route, link, onSubmit, isValidForm}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  }

    return (
      <main className='main form'>
        <Logo />
        <h1 className='form__title'>{title}</h1>
        <form className='form__container' onSubmit={handleSubmit}>
          <fieldset className='form__fieldset'>
            {children}
          </fieldset>
          <button type="submit" className='button form__button' disabled={!isValidForm}>{button}</button>
          <p className='form__text'>{text}
            <Link to={route} className='form__link link'>{link}</Link>
          </p>
        </form>
      </main>
    )
}

export default Form