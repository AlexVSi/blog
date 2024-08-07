import Router from 'express'
const router = Router()
import commentController from '../controllers/comment.controller'

router.get('/:postId', commentController.getAllCommentsToPost)
router.post('/add/:postId', commentController.addComment)
router.put('/edit/:postId', commentController.editComment)
router.delete('/delete/:id', commentController.deleteComment)

export default router
