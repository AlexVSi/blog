import React, { FC, useContext, useEffect, useState } from 'react';
import cl from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { Context } from 'main';
import { observer } from 'mobx-react-lite';
import { Button } from '@shared/ui/button';
import { CommentForm } from '@widgets/commentForm/ui/CommentForm';
import { IPost } from '@entities/post/model/IPost';

export const PostPage: FC = observer(() => {
    const { postStore } = useContext(Context)
    const { id } = useParams()
    const [post, setPost] = useState<IPost>({ id: '',
        title: '',
        description: '',
        content: '',
        userId: '',
        user: {
            email: ''
        }
    })

    useEffect(() => {
        fetchPost(id!)
    }, [])

    async function fetchPost(id: string) {
        await postStore.fetchPostById(id)
        const post = postStore.post
        if (post) {
            setPost({...post})
        }
    }

    if (!post) {
        return <h2>Пост не найден</h2>
    }

    return (
        <>
            <div className={cl["post__section"]}>
                <div className={`${cl["post__container"]} container`}>
                    <p>{post.user.email}</p>
                    <h2 className={cl["post__title"]}>{post.title}</h2>
                    <p className={cl["post__description"]}>{post.description}</p>
                    <div className={cl["post__content"]}>{post.content}</div>
                    <CommentForm></CommentForm>
                </div>
            </div>
        </>
    )
})
