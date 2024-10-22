import React, { FC, ReactNode } from 'react';
import cl from './Button.module.scss'

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    style?: ButtonVariant
}

export const Button: FC<ButtonProps>= ({ onClick, children, type = "submit", style = 'primary'}) => {
    return (
        <button type={type} className={`${cl['button']} ${cl[`button-${style}`]}`} onClick={onClick}>{children}</button>
    )
}
