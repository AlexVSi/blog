import { Router } from 'express'
const router = Router()
import userRouter from './userRouter.js'
import postRouter from './postRouter.js'
import commentRouter from './commentRouter.js'


router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)

export default router;
