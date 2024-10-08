import React, { FC, useContext } from 'react';
import './Profile.module.scss';
import { Context } from 'main';
import { observer } from 'mobx-react-lite';
import { PostsList } from '@widgets/postsList';

export const Profile = observer(() => {
    const { authStore } = useContext(Context)
    if (authStore.isLoading) {
        return <h2>Загрузка...</h2>
    }
    if (!authStore.isAuth) {
        return <h1>Авторизуйтесь</h1>
    }

    return (
        <>
            <h1>Личный кабинет</h1>
            <p>Добро пожаловать, {authStore.user.email}!</p>
            <PostsList email={authStore.user.email} />
        </>
    )
})
