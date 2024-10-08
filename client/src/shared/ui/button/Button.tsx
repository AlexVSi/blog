import React, { FC, ReactNode } from 'react';
import cl from './Button.module.scss'

export interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
}

export const Button: FC<ButtonProps>= ({ onClick, children }) => {
    return (
        <button className={cl['button']} onClick={onClick}>{children}</button>
    )
}
