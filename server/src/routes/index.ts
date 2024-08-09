import { Router } from 'express'
const router = Router()
import userRouter from './auth.router'
import postRouter from './post.router'
import commentRouter from './comment.router'

router.use('/auth', userRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)

export default router;
