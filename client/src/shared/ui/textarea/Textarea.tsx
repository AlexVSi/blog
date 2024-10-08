import React, { FC } from 'react'
import cl from './Textarea.module.scss';

interface TextareaProps {
    type: string
    name: string
    required: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    id?: string
    isIncorrect?: boolean
}

export const Textarea: FC<TextareaProps> = (props) => {
    return (
        <textarea
            className={`${cl.textarea} ${props.isIncorrect ? cl.textarea_incorrect : ''}`}
            {...props}
        />
    )
}
