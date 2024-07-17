import { NavLink } from 'react-router-dom'
import userIco from '@shared/assets/user.svg'

import classes from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<div className={`${classes.header__container} container`}>
				<nav className={classes.menu}>
					<ul className={classes.menu__list}>
						<NavLink to="/"><li>Главная</li></NavLink>
						<NavLink to="/account"><li><img src={userIco} alt="" /></li></NavLink>
					</ul>
				</nav>
			</div>
		</header>
	)
}
