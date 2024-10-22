import Router from 'express'
import postController from '../controllers/post.controller'
import { auth } from 'middleware/auth.middleware'

const router = Router()

router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPostById)
router.get('/user/:email', postController.getUserPosts)
router.post('/create', auth, postController.createPost)
router.put('/update/:id', postController.updatePost)
router.delete('/delete/:id', postController.deletePost)

export default router
