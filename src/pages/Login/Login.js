import React from 'react';
import './Login.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { useState } from 'react';

function Login({ onLogin, email, password, setEmail, setPassword }) {
    const [isValidForm, setIsValidForm] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const handleSubmit = () => {
        onLogin(email, password);
    }

    React.useEffect(() => {
        if (emailValid && passwordValid) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
    }, [emailValid, passwordValid])

    return (
        <Form title="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?" onSubmit={handleSubmit}
            route="/sign-up" link="Регистрация" isValidForm={isValidForm}>
            <Input name="email" label="E-mail" type="email" isError={false} placeholder="Введите логин" value={email} setValue={setEmail} setValid={setEmailValid} />
            <Input name="password" label="Пароль" type="password" isError={false} placeholder="Введите пароль" value={password} setValue={setPassword} setValid={setPasswordValid} />
        </Form>
    )
}

export default Login