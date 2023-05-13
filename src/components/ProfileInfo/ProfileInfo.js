import React from 'react';
import './ProfileInfo.css';
import { useState } from 'react';

function ProfileInfo({title, name, info, placeholder, setValue, readOnly, setValid}) {
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const inputClassName = readOnly ? 'profile-info__input profile-info__data' : 'profile-info__input profile-info__data profile-info__input_active'
  const errorClass = isError ? 'input__error profile-info__error visible' : 'input__error profile-info__error';
  let emailValid, userNameValid;

  React.useEffect(() => {
    switch (name) {
        case 'email':
            emailValid = info.match(/^\S+@\S+\.\S+$/);
            setValid(emailValid);
            if (!emailValid && info !== '') {
                setIsError(true);
                setErrorText('Адрес почты невалиден');
            } else {
                setIsError(false);
                setErrorText('');
            }
            break;
            case 'user_name':
              userNameValid = info !== '' ;
              setValid(userNameValid);
              if (!userNameValid) {
                  setIsError(true);
                  setErrorText('Введите имя');
              } else {
                  setIsError(false);
                  setErrorText('');
              }
              break;
        default:
            break;
    };
}, [info]);
  
  const handleChange = (evt) => {
    if (evt.target.value !== info) {
      setValue(evt.target.value);
    } else {
      setValid(false);
    }
  }

    return (
      <div className='profile-info'>
        <span className='profile-info__title'>{title}</span>
        <div className='profile-info__input-container'>
        <input className={inputClassName} name={name} value={info} placeholder={placeholder} readOnly={readOnly} required onChange={handleChange}/>
        <span className={errorClass}>{errorText}</span>
        </div>
      </div>
    )
}

export default ProfileInfo
