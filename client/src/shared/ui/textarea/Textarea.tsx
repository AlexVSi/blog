import React, { FC } from 'react'
import cl from './Textarea.module.scss';

interface TextareaProps {
    type: string
    name: string
    required?: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    id?: string
    isIncorrect?: boolean
    label?: string
}

export const Textarea: FC<TextareaProps> = ({ required = true, ...props }) => {
    return (
        <>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <textarea
                className={`${cl.textarea} ${props.isIncorrect ? cl.textarea_incorrect : ''}`}
                {...props}
            />
        </>
    )
}
