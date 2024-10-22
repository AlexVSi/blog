import { FC } from 'react'
import cl from './Post.module.scss'
import { Link } from 'react-router-dom'

interface PostProps {
    id: string
    title: string
    description: string
    email: string
}

export const Post: FC<PostProps> = ({ id, title, description, email }) => {
    return (
        <article className={cl["post"]}>
            <p className={cl["email"]}>{email}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/posts/${id}`} className={cl["read-more"]}>Узнать больше</Link>
        </article>
    )
}
