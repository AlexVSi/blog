import { Router } from 'express'
import postRouter from './post.router'
import commentRouter from './comment.router'
import authRouter from './auth.router'
import userRouter from './user.router'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)
router.use('/user', userRouter)

export default router;
