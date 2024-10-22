import React, { FC, useContext, useState } from 'react'
import cl from './PostForm.module.scss';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Button } from '@shared/ui/button';
import { ButtonVariant } from '@shared/ui/button/Button';
import { Context } from 'main';
import { IPost } from '@entities/post/model/IPost';

interface PostFormProps {
    createHandler: () => void
    cancleHendler: () => void
}

export const PostForm: FC<PostFormProps> = ({ createHandler, cancleHendler }) => {
    const { authStore } = useContext(Context)
    const { postStore } = useContext(Context)
    const [post, setPost] = useState<IPost>({
        id: '',
        title: '',
        description: '',
        content: '',
        userId: authStore.user.id
    })

    function createPost(e: React.FormEvent) {
        e.preventDefault()
        postStore.createPost(post)
        setPost({
            id: '',
            title: '',
            description: '',
            content: '',
            userId: authStore.user.id
        })
        createHandler()
    }

    function cancle(e: React.FormEvent) {
        e.preventDefault()
        setPost({
            id: '',
            title: '',
            description: '',
            content: '',
            userId: authStore.user.id
        })
        cancleHendler()
    }

    return (
        <form action='' onSubmit={createPost}>
            <h2>Новый пост</h2>
            <Input
                label='Название'
                type='text'
                name='title'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />

            <Input
                label='Описание'
                type='text'
                name='description'
                value={post.description}
                onChange={e => setPost({ ...post, description: e.target.value })}
            />

            <Textarea
                label='Содержание'
                type='text'
                name='content'
                value={post.content}
                onChange={e => setPost({ ...post, content: e.target.value })}
            />
            <Button type='submit'>Создать</Button>
            <Button type='reset' style={ButtonVariant.Secondary} onClick={(e) => cancle(e)}>Отмена</Button>
        </form>
    )
}
