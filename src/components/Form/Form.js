import React, { Component } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export class Form extends Component {
  render() {
    return (
      <main className='main form'>
        <Logo />
        <h1 className='form__title'>{this.props.title}</h1>
        <form className='form__container'>
          <fieldset className='form__fieldset'>
            {this.props.children}
          </fieldset>
          <button type="submit" className='button form__button'>{this.props.button}</button>
          <p className='form__text'>{this.props.text}
            <Link to={this.props.route} className='form__link'>{this.props.link}</Link>
          </p>
        </form>
      </main>
    )
  }
}

export default Form