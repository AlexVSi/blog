import { FC, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '@pages/main';
import { Profile } from '@pages/profile';
import { PostPage } from '@pages/postPage';
import { Error } from '@pages/error';
import { Layout } from './layout';
import './styles/style.scss';
import { Registration } from '@pages/registration';
import { Context } from 'main';
import { LogIn } from '@pages/logIn';

const App: FC = () => {
    const { authStore } = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            authStore.checkAuth()
        }
    }, [])
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' index element={<Main />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/posts/:id' element={<PostPage />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
