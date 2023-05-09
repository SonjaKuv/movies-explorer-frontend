import React from 'react';
import { useState } from 'react';
import './Input.css';

function Input({ name, label, type, value, setValue, placeholder, setValid }) {
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const inputClass = isError ? 'input__field error' : 'input__field';
    const errorClass = isError ? 'input__error visible' : 'input__error';
    let emailValid, passwordValid, userNameValid;

    React.useEffect(() => {
        switch (name) {
            case 'user_name':
                    userNameValid = value !== '' ;
                    setValid(userNameValid);
                    break;
            case 'email':
                emailValid = value.match(/^\S+@\S+\.\S+$/);
                setValid(emailValid);
                if (!emailValid && value !== '') {
                    setIsError(true);
                    setErrorText('Адрес почты невалиден');
                } else {
                    setIsError(false);
                    setErrorText('');
                }
                break;
            case 'password':
                passwordValid = value.length >= 8;
                setValid(passwordValid);
                if (!passwordValid && value !== '') {
                    setIsError(true);
                    setErrorText('Пароль должен содержать не менее 8 символов');
                } else {
                    setIsError(false);
                    setErrorText('');
                }
                break;
            default:
                break;
        };
    }, [value]);

    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <label className='input' htmlFor={name}>
            {label}
            <input name={name} type={type} value={value} className={inputClass} placeholder={placeholder} formNoValidate onChange={handleChange} />
            <span className={errorClass}>{errorText}</span>
        </label>
    )
}

export default Input
