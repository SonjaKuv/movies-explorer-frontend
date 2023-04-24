import React from 'react';
import './Input.css';

function Input({ isError, name, label, type, value, setValue, placeholder }) {
    const inputClass = isError ? 'input__field error' : 'input__field';
    const errorClass = isError ? 'input__error visible' : 'input__error';

    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <label className='input' htmlFor={name}>
            {label}
            <input name={name} type={type} value={value} className={inputClass} placeholder={placeholder} required onChange={handleChange} />
            <span className={errorClass}>Что-то пошло не так...</span>
        </label>
    )
}

export default Input
