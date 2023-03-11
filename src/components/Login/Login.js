import React, { Component } from 'react';
import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

export default class Login extends Component {
    render() {
        return (
            <Form title="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?" 
            route="/sign-up" link="Регистрация">
                <Input name="email" label="E-mail" type="email" value="pochta@yandex.ru" isError={false} />
                <Input name="password" label="Пароль" type="text" value="" isError={false} />
            </Form>
        )
    }
}