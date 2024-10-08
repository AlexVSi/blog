import React, { FC, useState } from 'react'
import cl from './LogIn.module.scss';
import { LoginForm } from '@widgets/loginForm';
import { RegForm } from '@widgets/regForm';
import { Link } from 'react-router-dom';

export const LogIn: FC = (props) => {
    const [haveProfile, setHaveProfile] = useState<boolean>(true)

    return (
        <>
            <section className="form__section">
                <h2>Вход в аккаунт</h2>
                <LoginForm />
                <p>Нет аккаунта? <Link to='/registration'>Зарегистрируйтесь</Link></p>
            </section>
        </>
    )
}