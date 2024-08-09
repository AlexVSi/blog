import { NextFunction, Request, Response } from 'express'
import userService from '../services/auth.service'

class UserController {
	async registration(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userService.registration(req.body)
			res.cookie('refreshToken', user.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true })
			return res.json(user)
		} catch (e) {
			console.log(e);
		}
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userService.login(req.body.email, req.body.password)
			res.cookie('refreshToken', user.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true })
			return res.json(user)
		} catch(e) {
			next(e)
		}
	}

	async logout(req: Request, res: Response, next: NextFunction) {
		try {
			const { refreshToken } = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)
		} catch (e) {
			console.log(e);
		}
	}

	async activate(req: Request, res: Response, next: NextFunction) {
		try {
			const activatioLink: string = req.params.link
			await userService.activate(activatioLink)
			return res.redirect(process.env.CLIENT_URL!)
		} catch (e) {
			next(e)
		}
	}

	async refresh(req: Request, res: Response, next: NextFunction) {
		try {
			const { refreshToken } = req.cookies
			const user = await userService.refresh(refreshToken)
			res.cookie('refreshToken', user.refreshToken, { maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true })
			return res.json(user)
		} catch (e) {
			next(e)
		}
	}

	async getAllUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await userService.getAllUsers()
			return res.json(users)
		} catch (e) {
			next(e)
		}
	}


}

export default new UserController()
