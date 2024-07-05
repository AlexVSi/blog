import { Router } from 'express'
const router = Router()
import userRouter from './userRouter'
import postRouter from './postRouter'
import commentRouter from './commentRouter'

router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)

export default router;
