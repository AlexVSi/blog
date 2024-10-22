import React, { FC } from 'react'
import cl from './Input.module.scss';

interface InputProps {
    type: React.InputHTMLAttributes<HTMLInputElement>['type']
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    placeholder?: string
    id?: string
    isIncorrect?: boolean
    label?: string
}

export const Input: FC<InputProps> = ({ required = true, ...props }) => {
    return (
        <>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <input
                className={`${cl['input']} ${props.isIncorrect ? cl['input-incorrect'] : ''}`}
                type={props.type}
                name={props.name}
                required={required}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder || ''}
                id={props.id || ''}
            >
            </input>

        </>
    )
}
