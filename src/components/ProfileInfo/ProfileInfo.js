import React, { Component } from 'react';
import './ProfileInfo.css';

export default class ProfileInfo extends Component {
  render() {
    return (
      <div className='profile-info'>
        <span className='profile-info_title'>{this.props.title}</span>
        <span className='profile-info_data'>{this.props.info}</span>
      </div>
    )
  }
}
