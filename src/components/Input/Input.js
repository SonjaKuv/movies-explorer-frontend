import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
    render() {
        const inputClass = this.props.isError ? 'input_field error' : 'input_field';
        const errorClass = this.props.isError ? 'input_error visible' : 'input_error'
        return (
            <label className='input' for={this.props.name}>
                {this.props.label}
                <input name={this.props.name} type={this.props.type} value={this.props.value} className={inputClass} required />
                <span className={errorClass}>Что-то пошло не так...</span>
            </label>
        )
    }
}
