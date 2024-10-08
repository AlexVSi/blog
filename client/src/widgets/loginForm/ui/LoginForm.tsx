import React, { useContext, useState } from 'react'
import './LoginForm.module.scss';
import { Button } from '@shared/ui/button';
import { Context } from 'main';
// import cl from './LoginForm.module.scss'
// import { observer } from 'mobx-react-lite';
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
        <form>
            {incorrectData && <IncorrectFlag>Неверный логин или пароль</IncorrectFlag>}
            <label htmlFor="email">Email</label>
            <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text'
                name='email'
                required
                isIncorrect={incorrectData}
            >
            </Input>

            <label htmlFor="email">Пароль</label>
            <Input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                name='password'
                required
                isIncorrect={incorrectData}
            >
            </Input>
            <Button onClick={(e: React.FormEvent) => login(e)}>Войти</Button>
        </form>
    )
}
