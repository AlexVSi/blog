import { IUser } from '../interfaces'
import { prisma } from 'prisma'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
import mailService from './mail.service'
import tokenService from './token.service'
import { UserDto } from '../dtos/user.dto'
import ApiError from 'exceptions/api.error'


class UserService {
	async registration(body: IUser) {
		const duplicate = await prisma.user.findFirst({ where: { email: body.email } })
		if (duplicate) {
			throw ApiError.BadRequest(`Пользователь с адресом ${body.email} уже существует`)
		}
		const hashPassword = bcrypt.hashSync(body.password, 7)
		const activationLink = v4()

		const userRole = await prisma.role.findFirst({
			where: {
				role: 'User'
			}
		})
		const user = await prisma.user.create({
			data: {
				firstname: body.firstname,
				lastname: body.lastname,
				email: body.email,
				password: hashPassword,
				roleId: userRole?.id as string,
				isActivated: false,
				activationLink: activationLink
			}
		})

		await mailService.sendActivationMail(body.email, `${process.env.API_URL}/api/activate${activationLink}`)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: user }
	}

	async login(email: string, password: string) {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		})
		if (!user) {
			throw ApiError.BadRequest('Пользователь не был найден')
		}
		const validPassword = bcrypt.compareSync(password, user.password)
		if (!validPassword) {
			throw ApiError.BadRequest('Не верный пароль')
		}
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: user }
	}

	async logout(refreshToken: string) {
		const token = await tokenService.removeToken(refreshToken)
		return token
	}

	async activate(activatioLink: string) {
		const user = await prisma.user.findFirst({
			where: {
				activationLink: activatioLink
			}
		})
		if (!user) {
			throw ApiError.BadRequest("Некорректная ссылка активации")
		}
		await prisma.user.update({
			where: {
				activationLink: activatioLink
			},
			data: {
				isActivated: true
			}
		})
	}

	async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const tokenFromDb = await tokenService.findToken(refreshToken)
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}
		const user = await prisma.user.findUnique({
			where: {
				id: (<any>userData).id
			}
		})
		const userDto = new UserDto(user!)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: user }
	}

	async getAllUsers() {
		const users = await prisma.user.findMany()
		return users
	}

}

export default new UserService()
