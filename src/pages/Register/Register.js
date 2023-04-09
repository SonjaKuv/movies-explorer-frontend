import React from 'react';
import './Register.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';

function Register() {
        return (
            <Form title="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?" 
            route="/sign-in" link="Войти">
                <Input name="user_name" label="Имя" type="text" value="Виталий" isError={false} placeholder="Введите имя"/>
                <Input name="email" label="E-mail" type="email" value="pochta@yandex.ru" isError={false} placeholder="Введите e-mail"/>
                <Input name="password" label="Пароль" type="password" value="dgdhdhdsggsdgd" isError={true} placeholder="Введите пароль"/>
            </Form>
        )
}

export default Register