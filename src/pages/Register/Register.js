import React from 'react';
import './Register.css';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';

function Register({onRegister, email, password, userName, setEmail, setPassword, setUserName}) {
const handleSubmit = () => {
    onRegister(userName, email, password);
}

        return (
            <Form title="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?" onSubmit={handleSubmit}
            route="/sign-in" link="Войти">
                <Input name="user_name" label="Имя" type="text" isError={false} placeholder="Введите имя" value={userName} setValue={setUserName}/>
                <Input name="email" label="E-mail" type="email" isError={false} placeholder="Введите e-mail" value={email} setValue={setEmail}/>
                <Input name="password" label="Пароль" type="password" isError={false} placeholder="Введите пароль" value={password} setValue={setPassword}/>
            </Form>
        )
}

export default Register