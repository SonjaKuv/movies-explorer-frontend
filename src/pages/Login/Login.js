import React from 'react';
import './Login.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';

function Login({onLogin, email, password, setEmail, setPassword}) {
    const handleSubmit = () => {
        onLogin(email, password);
    }

        return (
            <Form title="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?" onSubmit={handleSubmit}
            route="/sign-up" link="Регистрация">
                <Input name="email" label="E-mail" type="email" isError={false} placeholder="Введите логин" value={email} setValue={setEmail}/>
                <Input name="password" label="Пароль" type="text" isError={false} placeholder="Введите пароль" value={password} setValue={setPassword}/>
            </Form>
        )
}

export default Login