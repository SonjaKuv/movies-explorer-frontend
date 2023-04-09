import React from 'react';
import './Profile.css';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

function Profile() {
    return (
      <main className='main profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <div className='profile__container'>
          <ProfileInfo title='Имя' info='Виталий' placeholder="Введите имя"/>
          <ProfileInfo title='E-mail' info='pochta@yandex.ru' placeholder="Введите e-mail"/>
        </div>
        <div className='profile__container profile__buttons-container'>
          <button className='profile__button button'>Редактировать</button>
          <button className='profile__button button profile__button_type_sign-out'>Выйти из аккаунта</button>
        </div>
      </main>
    )
}

export default Profile
