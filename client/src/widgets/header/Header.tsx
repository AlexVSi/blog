import React, {FC} from 'react'
import { NavLink, Link } from 'react-router-dom'
import userIco from '@shared/assets/user.svg'

import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header>
			<div className={`${styles['header__container']} container`}>
				<nav className={styles['menu']}>
					<ul className={styles['menu__list']}>
						<Link to="/"><li>Главная</li></Link>
						<Link to="/account"><li><img className={styles['login-img']} src={userIco} alt="" /></li></Link>
					</ul> 
				</nav>
			</div>
		</header>
	)
}
