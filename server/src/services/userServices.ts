import { Users } from '../models/models.js'
class UserServices {
	async getAllUsers() {
		const users = await Users.findAll()
			return users
		}

	async getUserById(id) {
		const user = await Users.findAll({
			where: {
				id: id
			}
		})
		return user[0]
	}

	async addUser(body) {
		const newUser = await Users.create({
			id: null,
			firstname: body.firstname,
			lastname: body.lastname,
			login: body.login,
			password: body.password,
		})
		return newUser
	}

	async updateUser(id, body) {
		const updatedUser = await Users.update({
			firstname: body.firstname,
			lastname: body.lastname,
			login: body.login,
			password: body.password,
		}, {
			where: {
				id: id
			}
		})
		return updatedUser
	}

	async deleteUser(id) {
		const deletedUser = await Users.destroy({
			where: {
				id: id
			}
		})
		return deletedUser
	}
}

export default new UserServices()
