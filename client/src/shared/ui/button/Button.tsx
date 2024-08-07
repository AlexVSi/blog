import React from 'react';
import { IButton } from './IButton';
import './Button.module.scss'
export const Button: React.FC<IButton> = ({onClick, children}) => {
	return (
		<button className='button' onClick={onClick}>{children}</button>
	)
}