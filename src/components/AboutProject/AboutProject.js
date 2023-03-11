import React, { Component } from 'react'
import './AboutProject.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutCard from './AboutCard/AboutCard';
import AboutWeek from './AboutWeek/AboutWeek';

export default class AboutProject extends Component {
    render() {
        return (
            <section className='section about'>
                <SectionTitle title='О проекте' />
                <div className='about_container'>
                    <AboutCard
                        title='Дипломный проект включал 5 этапов'
                        description='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.' />
                    <AboutCard
                        title='На выполнение диплома ушло 5 недель'
                        description='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.' />
                </div>
                <div className='about_week-container'>
                    <AboutWeek className='week_title-one' title='1 неделя' subtitle='Back-end' />
                    <AboutWeek className='week_title-four' title='4 недели' subtitle='Front-end' />
                </div>
            </section>
        )
    }
}
