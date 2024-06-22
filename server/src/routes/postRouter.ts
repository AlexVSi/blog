import Router from 'express'
const router = Router()
import postController from '../controllers/postController.js'

router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPostById)
router.post('/add', postController.addPost)
router.put('/update/:id', postController.updatePost)
router.delete('/delete/:id', postController.deletePost)

export default router
