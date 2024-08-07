import { Post } from '@entities/post/ui/Post'
import { IPost } from '@entities/post/ui/IPost'
import './PostsList.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const PostsList = () => {
	const [postsList, setPostsList] = useState<IPost[]>([])
	const [error, setError] = useState<Boolean>(false)

	useEffect(() => {
		getPosts()
	}, [])

	async function getPosts() { 
		const response = await axios.get<IPost[]>("http://127.0.0.1:8000/api/posts/")
		setPostsList(response.data)
		if (response.status != 200) {
			setError(true)
		}
	}

	if (error) {
		return (
			<h2>Ой! Произошла ошибка</h2>
		)
	} 
	return (
		<div className='posts__container container'>
			<div className='post__block'>
				{postsList.map((item, index) => {
					return (
						<Post title={item.title} description={item.description} key={index}/>
					)
				})}
			</div>
		</div>
	)
}
