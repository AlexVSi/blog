import { Request, Response } from 'express'
import userServices from 'services/userServices.js'

class UserController {
	async getAllUsers(req: Request, res: Response) {
		try {
			const users = await userServices.getAllUsers()
			return res.json(users)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async getUserById(req: Request, res: Response) {
		try {
			const user = await userServices.getUserById(req.params.id)
			return res.json(user)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async addUser(req: Request, res: Response) {
		try {
			const newUser = await userServices.addUser(req.body)
			return res.json(newUser)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async updateUser(req: Request, res: Response) {
		try {
			const updatedUser = await userServices.updateUser(req.params.id, req.body)
			return res.json(updatedUser)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async deleteUser(req: Request, res: Response) {
		try {
			const deletedUsers = await userServices.deleteUser(req.params.id)
			return res.json(deletedUsers)
		} catch(e) {
			return res.status(500).json(e)
		}
	}
}

export default new UserController()
