import React from 'react';
import './Login.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';

function Login() {
        return (
            <Form title="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?" 
            route="/sign-up" link="Регистрация">
                <Input name="email" label="E-mail" type="email" value="pochta@yandex.ru" isError={false} />
                <Input name="password" label="Пароль" type="text" value="" isError={false} />
            </Form>
        )
}

export default Login