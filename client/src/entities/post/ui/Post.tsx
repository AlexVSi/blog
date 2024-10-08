import { FC } from 'react'
import cl from './Post.module.scss'
import { Link } from 'react-router-dom'

interface PostProps {
    id: string
    title: string
    description: string
}

export const Post: FC<PostProps> = ({ id, title, description }) => {
    return (
        <article className={cl["post"]}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/posts/${id}`} className={cl["read-more"]}>Узнать больше</Link>
        </article>
    )
}
