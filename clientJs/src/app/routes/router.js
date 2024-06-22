import { Main } from "@pages/main";
import { PostPage } from "@pages/postPage";
import { Account } from "@pages/account";

export const routs = [
	{path: '*', element: <Main />},
	{path: '/post/:id', element: <PostPage />},
	{path: '/account/:id', element: <Account />},
]