import Router from 'express'
const router = Router()
import userController from '../controllers/auth.controller'
import { auth } from 'middleware/auth.middleware'

router.get('/all', auth, userController.getAllUsers)
router.post('/registration/', userController.registration)
router.get('/activate/:link', userController.activate)
router.post('/login/', userController.login)
router.post('/logout/', userController.logout)
router.get('/refresh/', userController.refresh)

export default router
