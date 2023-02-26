import React, { Component } from 'react';
import './AboutWeek.css';

export default class AboutWeek extends Component {
    render() {
        return (
            <div className='week'>
                <div className={this.props.class}>{this.props.title}</div>
                <p className='week_subtitle'>{this.props.subtitle}</p>
            </div>
        )
    }
}
