import React from 'react';
import './Profile.css';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { useState } from 'react';

function Profile({ handleSignout, userName, email, setUserName, setEmail, handleNewInfo }) {
  const [readOnly, setReadOnly] = useState(true);

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
        <ProfileInfo title='Имя' info={userName} placeholder="Введите имя" setValue={setUserName} readOnly={readOnly} />
        <ProfileInfo title='E-mail' info={email} placeholder="Введите e-mail" setValue={setEmail} readOnly={readOnly} />
      </div>
      <div className='profile__container profile__buttons-container'>
        {(readOnly) ? (
          <button className='profile__button button' onClick={handleChange}>Редактировать</button>
        ) : (
          <button className='profile__button button' onClick={handleSave}>Сохранить</button>
        )}
        <button className='profile__button button profile__button_type_sign-out' onClick={handleSignout}>Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile
