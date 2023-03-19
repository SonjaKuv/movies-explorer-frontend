import React from 'react'
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import TechsCard from '../TechsCard/TechsCard';


function Techs() {
        return (
            <section className='section techs'>
                <SectionTitle title='Технологии' />
                <div className='techs__container'>
                    <h2 className='techs__title'>7 технологий</h2>
                    <p className='subtitle techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className='techs__cards'>
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

export default Techs
