import Router from 'express'
import commentController from '../controllers/comment.controller'

const router = Router()

router.get('/:postId', commentController.getAllCommentsToPost)
router.post('/add/:postId', commentController.addComment)
router.put('/edit/:postId', commentController.editComment)
router.delete('/delete/:id', commentController.deleteComment)

export default router
