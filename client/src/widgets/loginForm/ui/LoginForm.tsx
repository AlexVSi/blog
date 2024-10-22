import React, { useContext, useState } from 'react'
import './LoginForm.module.scss';
import { Button } from '@shared/ui/button';
import { Context } from 'main';
import { Input } from '@shared/ui/input';
import { useNavigate } from 'react-router-dom';
import { IncorrectFlag } from '@shared/ui/incorrectFlag';


export const LoginForm = () => {
    const navigate = useNavigate()
    const { authStore } = useContext(Context)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [incorrectData, setIncorrectData] = useState<boolean>(false)

    const login = async (e: React.FormEvent) => {
        e.preventDefault()
        if (await authStore.login(email, password)) {
            setPassword('')
            setEmail('')
            setIncorrectData(false)
            navigate('/profile');
        }
        setIncorrectData(true)
    }

    return (
        <form action='' onSubmit={login}>
            {incorrectData && <IncorrectFlag>Неверный логин или пароль</IncorrectFlag>}
            <Input
                label='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='email'
                name='email'
                isIncorrect={incorrectData}
            >
            </Input>

            <Input
                label='Пароль'
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                name='password'
                isIncorrect={incorrectData}
            >
            </Input>
            <Button type='submit'>Войти</Button>
        </form>
    )
}
