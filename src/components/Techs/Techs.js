import React, { Component } from 'react'
import './Techs.css';
import SectionTitle from '../Main/Title/SectionTitle';
import TechsCard from './TechsCard/TechsCard';


export default class Techs extends Component {
    render() {
        return (
            <section className='section techs'>
                <SectionTitle title='Технологии' />
                <div className='techs_container'>
                    <h2 className='techs_title'>7 технологий</h2>
                    <p className='subtitle techs_subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className='techs_cards'>
                        <TechsCard name='HTML' />
                        <TechsCard name='CSS' />
                        <TechsCard name='JS' />
                        <TechsCard name='React' />
                        <TechsCard name='Git' />
                        <TechsCard name='Express.js' />
                        <TechsCard name='MongoDB' />
                    </div>
                </div>
            </section>
        )
    }
}
