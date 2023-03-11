import React, { Component } from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import find from '../../images/find.svg';
import line from '../../images/line.svg';

export default class SearchForm extends Component {
    render() {
        return (
            <section className='section search'>
                <form action='' method='' className='search_form'>
                    <img className='search_icon' src={search} alt='Поиск' />
                    <input className='search_input' type='text' name='search' placeholder='Фильм' />
                    <input type="image" className='search_button' src={find} alt='Найти' />
                    <img className='search_line' src={line} alt='Линия' />
                    <label className="search_checkbox">
                        <input type="checkbox" />
                            <span className="search_checkbox-switch"></span>
                            Короткометражки
                    </label>
                </form>
                <div className='search_horizontal-line'></div>
            </section>
        )
    }
}
