import {FC, ReactNode } from "react";
import { Main } from "@pages/main";
import { PostPage } from "@pages/postPage";
import { Account } from "@pages/account";

interface IRouts {
	path: string,
	element: FC
}

export const routs: Array<IRouts> = [
	{path: '*', element: {<Main />}},
	{path: '/post/:id', element: <PostPage />},
	{path: '/account/:id', element: <Account />},
]
