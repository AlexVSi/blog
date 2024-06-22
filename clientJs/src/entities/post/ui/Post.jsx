import { Button } from '@shared/ui/button'
import classes from './Post.module.scss'

export const Post = ({title, description}) => {
	return (
		<div className={classes.post}>
			<h3 className={classes.titie}>{title}</h3>
			<div className={classes.description}>{description}</div>
			<div className={classes.buttons}>
				<Button>Редактировать</Button>
				<Button>Удалить</Button>
			</div>
		</div>
	)
}
