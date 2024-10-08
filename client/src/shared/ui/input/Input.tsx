import React, { FC, useState } from 'react'
import cl from './Input.module.scss';
import { values } from 'mobx';

interface InputProps {
    type: string
    name: string
    required: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    id?: string
    isIncorrect?: boolean
}

export const Input: FC<InputProps> = (props) => {

    return (
        <input
            className={`${cl.input} ${props.isIncorrect ? cl.input_incorrect : ''}`}
            type={props.type}
            name={props.name}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder || ''}
            id={props.id || ''}
        >
        </input>
    )
}
