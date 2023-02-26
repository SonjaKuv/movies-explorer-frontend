import React, { Component } from 'react';
import './AboutCard.css';

export default class AboutCard extends Component {
    render() {
        return (
            <div className='about-card'>
                <h3 className='about-card_title'>{this.props.title}</h3>
                <p className='subtitle about-card_description'>{this.props.description}</p>
            </div>
        )
    }
}
