import React, { FC, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import userIco from '@shared/assets/user.svg'

import cl from './Header.module.scss'
import { Context } from 'main'
import { observer } from 'mobx-react-lite'

export const Header: FC = observer(() => {
    const { authStore } = useContext(Context)

    return (
        <header className={cl['header']}>
            <div className={`${cl['header__container']} container`}>
                <nav className={cl['menu']}>
                    <div className={cl['logo']}>My Blog</div>
                    <ul className={cl['menu__list']}>
                        <Link to='/'><li>Главная</li></Link>
                        <Link to='/profile'><li>Профиль</li></Link>
                        <Link to='/admin'><li>Админ панель</li></Link>
                        {!authStore.isAuth ?
                            <>
                                <Link to='/login'><li>Войти</li></Link>
                                <Link to='/registration'><li>Регистрация</li></Link>
                            </>
                        :  <li onClick={() => authStore.logout()}>Выйти</li>
                        }

                    </ul>
                </nav>
            </div>
        </header>
    )
})
