import React, { FC, useContext, useState } from 'react'
import { Button } from '@shared/ui/button';
import { Context } from 'main';
import { IUserReg } from '@entities/user/model/IUser';
import cl from './RegForm.module.scss'
import { Input } from '@shared/ui/input';
import { useNavigate } from 'react-router-dom';


export const RegForm = () => {
    const navigate = useNavigate()
    const { authStore } = useContext(Context)
    const [userData, setUserData] = useState<IUserReg>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<boolean>(true)

    const registration = (e: React.FormEvent) => {
        e.preventDefault()
        if (userData.password !== confirmPassword) {
            setPasswordConfirm(false)
        } else {
            setPasswordConfirm(true)
            authStore.registration(userData)
            navigate('/profile');
        }
    }

    return (
        <form>
            <label htmlFor="firstname">Имя</label>
            <Input
                onChange={e => setUserData({...userData, firstname: e.target.value})}
                value={userData.firstname}
                type='text'
                name='firstname'
                required
            >
            </Input>

            <label htmlFor="lastname">Фамилия</label>
            <Input
                onChange={e => setUserData({...userData, lastname: e.target.value})}
                value={userData.lastname}
                type='text'
                name='lastname'
                required
            >
            </Input>

            <label htmlFor="email">Email</label>
            <Input
                onChange={e => setUserData({...userData, email: e.target.value})}
                value={userData.email}
                type='email'
                name='email'
                required
            >
            </Input>

            <label htmlFor="password">Пароль</label>
            <Input
                onChange={e => setUserData({...userData, password: e.target.value})}
                value={userData.password}
                type='password'
                name='password'
                required
            >
            </Input>

            <label htmlFor="confirmPassword">Подтвердить пароль</label>
            <Input
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type='confirmPassword'
                name='confirmPassword'
                required
            >
            </Input>
            {!passwordConfirm && <p>Пароли не совпадают</p>}
            <Button onClick={(e: React.FormEvent) => registration(e)}>Регистрация</Button>
        </form>
    )
}
