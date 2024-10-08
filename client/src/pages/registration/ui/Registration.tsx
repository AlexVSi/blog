import React, { FC } from 'react'
import cl from './Registration.module.scss';
import { RegForm } from '@widgets/regForm/ui/RegForm';
import { Link } from 'react-router-dom';

export const Registration: FC = (props) => {
    return (
        <>
            <section className="form__section">
                <h2>Создать аккаунт</h2>
                <RegForm />
                <p>Есть аккаунт? <Link to='/login'>Войти</Link></p>
            </section>
        </>
    )
}