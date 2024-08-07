import React, { FC, useState } from 'react';
import { PostsList } from '@widgets/postsList';
import { Post } from '@entities/post/ui';
import { Comment } from '@entities/comment/ui/Comment';
import  './PostPage.module.scss';
import { Header } from '@widgets/header';
import { IPost } from '@entities/post/ui/IPost';

export const PostPage = () => {
	const [post, usePost] = useState<IPost>()
	return (
		<>
			<h1>Здесь будет пост с комментариями</h1>
			{/* <Post/> */}
			{/* <Comment/> */}
		</>
	)
}