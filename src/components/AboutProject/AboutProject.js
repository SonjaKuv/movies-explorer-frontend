import React from 'react'
import './AboutProject.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutCard from '../AboutCard/AboutCard';
import AboutWeek from '../AboutWeek/AboutWeek';

function AboutProject() {
        return (
            <section className='section about'>
                <SectionTitle title='О проекте' />
                <div className='about__container'>
                    <AboutCard
                        title='Дипломный проект включал 5 этапов'
                        description='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.' />
                    <AboutCard
                        title='На выполнение диплома ушло 5 недель'
                        description='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.' />
                </div>
                <div className='about__week-container'>
                    <AboutWeek weekClass='week__title week__title-one' title='1 неделя' subtitle='Back-end' />
                    <AboutWeek weekClass='week__title week__title-four' title='4 недели' subtitle='Front-end' />
                </div>
            </section>
        )
}

export default AboutProject
