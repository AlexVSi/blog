import { Outlet } from 'react-router-dom';
import cl from './Layout.scss';
import './Layout.scss';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

export const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
