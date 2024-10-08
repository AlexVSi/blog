import { FC, ReactNode } from "react";
import { Main } from "@pages/main";
import { PostPage } from "@pages/postPage";
import { Profile } from "@pages/profile";
import { Registration } from "@pages/registration";

// interface IRouts {
// 	path: string,
// 	element: FC
// }

export const authRoutes = [
    { path: '*', Component: Main },
    { path: '/post/:id', Component: PostPage },
    { path: '/profile/', Component: Profile },
    { path: '/registration', Component: Registration },
]


export const publicRoutes = [
    { path: '*', Component: Main },
    { path: '/post/:id', Component: PostPage },
    { path: '/profile/', Component: Profile },
    { path: '/registration', Component: Registration },
]

