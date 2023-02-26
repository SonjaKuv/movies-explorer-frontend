import React, { Component } from 'react'
import './TechsCard.css';

export default class TechsCard extends Component {
  render() {
    return (
      <div className='techs-card'>
        {this.props.name}
      </div>
    )
  }
}
