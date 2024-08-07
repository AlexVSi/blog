import { Router } from 'express'
const router = Router()
import userRouter from './user.router'
import postRouter from './post.router'
import commentRouter from './comment.router'

router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)

export default router;
