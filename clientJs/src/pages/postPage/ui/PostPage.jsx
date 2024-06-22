import { useState } from 'react';
import { PostsList } from '@widgets/postsList';
import { Post } from '@entities/post/ui';
import { Comment } from '@entities/comment/ui/Comment';
import classes from './PostPage.module.scss';
import { Header } from '@widgets/header';

export const PostPage = () => {
	const [post, usePost] = useState()
	return (
		<>
			<h1>Здесь будет пост с комментариями</h1>
			{/* <Post/> */}
			{/* <Comment/> */}
		</>
	)
}