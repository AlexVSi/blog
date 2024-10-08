import React, { FC } from 'react'
import  cl from'./Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={cl["footer"]}>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
    )
}