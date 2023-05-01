import React from 'react';
import './ProfileInfo.css';

function ProfileInfo({title, info, placeholder, setValue, readOnly}) {
  const inputClassName = readOnly ? 'profile-info__input profile-info__data' : 'profile-info__input profile-info__data profile-info__input_active'
  const handleChange = (evt) => {
    setValue(evt.target.value);
  }

    return (
      <div className='profile-info'>
        <span className='profile-info__title'>{title}</span>
        <input className={inputClassName} value={info} placeholder={placeholder} readOnly={readOnly} required onChange={handleChange}/>
      </div>
    )
}

export default ProfileInfo
