import { Post } from '@entities/post/ui/Post'
import classes from './PostsList.module.scss'
import { useState } from 'react'
import axios from 'axios'

export const PostsList = () => {
	const [postsList, setPostsList] = useState([])
	const [error, setError] = useState(false)

	async function getPosts() { 
		const response = await axios.get("http://127.0.0.1:8000/api/posts/")
			.catch((e) => {
				console.log(e)
				setError(true)
			})
		setPostsList(response.data)
	}

	getPosts()

	if (error) {
		return (
			<h2>Ой! Произошла ошибка</h2>
		)
	} 
	return (
		<div className={`${classes.posts__container} container`}>
			<div className={classes.post__block}>
				{postsList.map((item, index) => {
					return (
						<Post title={item.title} description={item.description} key={item.id}/>
					)
				})}
			</div>
		</div>
	)
}
