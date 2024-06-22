import { Routes, Route } from 'react-router-dom';
import { Main } from '@pages/main';
import { Account } from '@pages/account';
import { PostPage } from '@pages/postPage';
import { Error } from '@pages/error';
import { Layout } from './layout';

import './styles/style.scss';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index path='/' element={<Main />} />
					<Route path='/account' element={<Account />} />
					<Route path='/post' element={<PostPage />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
