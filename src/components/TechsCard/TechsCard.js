import React from 'react'
import './TechsCard.css';

function TechsCard({name}) {
    return (
      <div className='techs-card'>
        {name}
      </div>
    )
}

export default TechsCard
