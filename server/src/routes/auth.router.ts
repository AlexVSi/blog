import Router from 'express'
import authController from '../controllers/auth.controller'

const router = Router()

router.post('/registration/', authController.registration)
router.get('/activate/:link', authController.activate)
router.post('/login/', authController.login)
router.post('/logout/', authController.logout)
router.get('/refresh/', authController.refresh)

export default router
