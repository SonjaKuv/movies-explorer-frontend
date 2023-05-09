import React from 'react';
import './Profile.css';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { useState } from 'react';

function Profile({ handleSignout, userName, email, setUserName, setEmail, handleNewInfo }) {
  const [readOnly, setReadOnly] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [userNameValid, setUserNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  React.useEffect(() => {
    if (emailValid && userNameValid) {
        setIsValidForm(true);
    } else {
        setIsValidForm(false);
    }
}, [emailValid, userNameValid])

  const handleChange = () => {
    setReadOnly(false);
  };

  const handleSave = (evt, userName, email) => {
    evt.preventDefault();
    setReadOnly(true);
    handleNewInfo();
  }
  return (
    <main className='main profile'>
      <h1 className='profile__title'>Привет, {userName}</h1>
      <div className='profile__container'>
        <ProfileInfo title='Имя' name='user_name' info={userName} placeholder="Введите имя" setValue={setUserName} readOnly={readOnly} setValid={setUserNameValid}/>
        <ProfileInfo title='E-mail' name='email' info={email} placeholder="Введите e-mail" setValue={setEmail} readOnly={readOnly} setValid={setEmailValid}/>
      </div>
      <div className='profile__container profile__buttons-container'>
        {(readOnly) ? (
          <button className='profile__button button' onClick={handleChange}>Редактировать</button>
        ) : (
          <button className='profile__button button' disabled={!isValidForm} onClick={handleSave}>Сохранить</button>
        )}
        <button className='profile__button button profile__button_type_sign-out' onClick={handleSignout}>Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile
