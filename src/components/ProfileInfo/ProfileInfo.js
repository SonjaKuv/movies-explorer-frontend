import React from 'react';
import './ProfileInfo.css';

function ProfileInfo({title, info}) {
    return (
      <div className='profile-info'>
        <span className='profile-info__title'>{title}</span>
        <input className='profile-info__input profile-info__data' value={info} readOnly required/>
      </div>
    )
}

export default ProfileInfo
