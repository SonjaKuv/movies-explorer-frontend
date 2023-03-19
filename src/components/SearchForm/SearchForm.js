import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import find from '../../images/find.svg';

function SearchForm() {
        return (
            <section className='section search'>
                <div className='search__container'>
                <form action='' method='' className='search__form'>
                    <img className='search__icon' src={search} alt='Поиск' />
                    <input className='search__input button' type='text' name='search' placeholder='Фильм' />
                    <input type="image" className='search__button button' src={find} alt='Найти' />
                </form>

                    <label className="search__checkbox">
                        <input type="checkbox" />
                        <span className="search__checkbox-switch button"></span>
                        Короткометражки
                    </label>
  
                </div>
                <div className='search__horizontal-line'></div>
            </section>
        )
}

export default SearchForm
