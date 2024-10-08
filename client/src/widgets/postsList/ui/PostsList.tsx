import { Post } from '@entities/post/ui/Post'
import { IPost } from '@entities/post/model/IPost'
import './PostsList.module.scss'
import { FC, useContext, useEffect, useState } from 'react'
import { Context } from 'main'
import { observer } from 'mobx-react-lite'

interface PostListProps {
    email?: string | null
}

export const PostsList: FC<PostListProps> = observer(({ email = null }) => {
    const { postStore } = useContext(Context)
    const [postList, setPostList] = useState<IPost[]>([])
    const [error, setError] = useState<Boolean>(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        if (email) {
            await postStore.fetchUserPosts(email)
            setPostList(postStore.userPosts)
        } else {
            await postStore.fetchAllPosts()
            setPostList(postStore.allPosts)
        }
    }

    if (!postList) {
        return (
            <h2>Ой! Произошла ошибка</h2>
        )
    }

    return (
        <div className='post__block'>
            {postList.map((item, index) => {
                return (
                    <Post id={item.id} title={item.title} description={item.description} key={index} />
                )
            })}
        </div>
    )
})
