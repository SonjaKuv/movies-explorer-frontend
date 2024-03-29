import React from 'react'
import './SectionTitle.css'

function SectionTitle({title}) {

        return (
    <div className='section-title'>
        <h3 className='section-title__text'>{title}</h3>
    </div>
    )
}

export default SectionTitle
