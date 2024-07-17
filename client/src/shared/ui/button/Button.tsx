import React from 'react';
import { IButton } from './IButton';
import classes from './Button.module.scss'
export const Button: React.FC<IButton> = ({props, children}) => {
	return (
		<button className={classes.button} {...props}>{children}</button>
	)
}