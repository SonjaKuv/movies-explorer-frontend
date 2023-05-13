import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import find from '../../images/find.svg';

function SearchForm({ onSubmit, isSubmited, searchText, setSearchText, isShortMovies, setIsShortMovies }) {
    let searchErrorClass = `search__error ${(isSubmited && searchText === '') && 'visible'}`;

    const handleChange = (evt) => {
        setSearchText(evt.target.value);
    };

    const handleCheckboxChange = (evt) => {
        setIsShortMovies(evt.target.checked)
    }

    return (
        <section className='section search'>
            <div className='search__container'>
                <form action='' method='' className='search__form' onSubmit={onSubmit}>
                    <img className='search__icon' src={search} alt='Поиск' />
                    <input className='search__input button' type='text' name='search' placeholder='Фильм' value={searchText} onChange={handleChange} />
                    <input type="image" className='search__button button' src={find} alt='Найти' />
                </form>

                <label className="search__checkbox">
                    <input type="checkbox" checked={isShortMovies} onChange={handleCheckboxChange}/>
                    <span className="search__checkbox-switch button"></span>
                    Короткометражки
                </label>

            </div>
            <span className={searchErrorClass}>Нужно ввести ключевое слово</span>
            <div className='search__horizontal-line'></div>
        </section>
    )
}

export default SearchForm
