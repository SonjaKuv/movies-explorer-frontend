import React, { Component } from 'react'
import './SectionTitle.css'

export default class Title extends Component {

    render() {
        return (
    <div className='section-title'>
        <h3 className='section-title_text'>{this.props.title}</h3>
    </div>
    )
  }
}
