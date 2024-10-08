import Router from "express";
import userController from "controllers/user.controller";

const router = Router()

router.get('/users', userController.getAllUsers)

export default router
