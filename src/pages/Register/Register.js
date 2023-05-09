import React from 'react';
import './Register.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { useState } from 'react';

function Register({ onRegister, email, password, userName, setEmail, setPassword, setUserName }) {
    const [isValidForm, setIsValidForm] = useState(false);
    const [userNameValid, setUserNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const handleSubmit = () => {
        onRegister(userName, email, password);
    }

    React.useEffect(() => {
        if (emailValid && passwordValid && userNameValid) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
    }, [emailValid, passwordValid, userNameValid])

    return (
        <Form title="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?" onSubmit={handleSubmit}
            route="/sign-in" link="Войти" isValidForm={isValidForm}>
            <Input name="user_name" label="Имя" type="text" placeholder="Введите имя" value={userName} setValue={setUserName} setValid={setUserNameValid} />
            <Input name="email" label="E-mail" type="email" placeholder="Введите e-mail" value={email} setValue={setEmail} setValid={setEmailValid} />
            <Input name="password" label="Пароль" type="password" placeholder="Введите пароль" value={password} setValue={setPassword} setValid={setPasswordValid} />
        </Form>
    )
}

export default Register