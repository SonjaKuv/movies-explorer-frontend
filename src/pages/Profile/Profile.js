import React, { Component } from 'react';
import './Profile.css';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

export default class Profile extends Component {
  render() {
    return (
      <main className='main profile'>
        <h1 className='profile_title'>Привет, Виталий!</h1>
        <div className='profile_container'>
          <ProfileInfo title='Имя' info='Виталий' />
          <ProfileInfo title='E-mail' info='pochta@yandex.ru' />
        </div>
        <div className='profile_container profile_buttons-container'>
          <button className='profile_button'>Редактировать</button>
          <button className='profile_button profile_button_type_sign-out'>Выйти из аккаунта</button>
        </div>
      </main>
    )
  }
}
