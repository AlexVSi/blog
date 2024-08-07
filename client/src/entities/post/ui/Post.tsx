import React, {FC} from 'react'
import { Button } from '@shared/ui/button'
import { IPost } from './IPost'
import  './Post.module.scss'

export const Post: FC<IPost> = ({title, description}) => {
	return (
		<div className='post'>
			<h3 className='titie'>{title}</h3>
			<div className='description'>{description}</div>
			<div className='buttons'>
				<Button>Редактировать</Button>
				<Button>Удалить</Button>
			</div>
		</div>
	)
}
