import Router from 'express'
const router = Router()
import userController from '../controllers/userController'

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/add', userController.addUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

export default router
