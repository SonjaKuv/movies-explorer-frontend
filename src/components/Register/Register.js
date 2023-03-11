import React, { Component } from 'react';
import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

export default class Register extends Component {
    render() {
        return (
            <Form title="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?" 
            route="/sign-in" link="Войти">
                <Input name="user_name" label="Имя" type="text" value="Виталий" isError={false} />
                <Input name="email" label="E-mail" type="email" value="pochta@yandex.ru" isError={false} />
                <Input name="password" label="Пароль" type="password" value="dgdhdhdsggsdgd" isError={true} />
            </Form>
        )
    }
}