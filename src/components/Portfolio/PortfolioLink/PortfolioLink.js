import React, { Component } from 'react';
import './PortfolioLink.css';
import arrow from '../../../images/arrow.svg';

export default class PortfolioLink extends Component {
  render() {
    return (
      <a className='portfolio-link' href={this.props.link}>
        <div className='portfolio-link_container'>
             <h3 className='portfolio-link_title'>{this.props.name} </h3> 
             <img className='portfolio-link_icon' src={arrow} alt='Стрелка'/> 
        </div>
    
      </a>
    )
  }
}
