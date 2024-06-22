import classes from './Button.module.scss'
export const Button = ({props, children}) => {
	return (
		<button className={classes.button} {...props}>{children}</button>
	)
}