import { IUser } from '../interfaces'
import { prisma } from 'prisma'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
import mailService from './mail.service'
import tokenService, { IGenerateTokens } from './token.service'
import { UserDto } from '../dtos/user.dto'
import ApiError from 'exceptions/api.error'

class AuthService {
    async registration(body: IUser) {
        const duplicate = await prisma.user.findFirst({ where: { email: body.email } })
        if (duplicate) {
            throw ApiError.BadRequest(`Пользователь с адресом ${body.email} уже существует`)
        }
        const hashPassword = bcrypt.hashSync(body.password, 7)
        const activationLink = v4()

        const user = await prisma.user.create({
            data: {
                ...body,
                password: hashPassword,
                roles: {
                    connect: [{ role: 'USER' }]
                },
                isActivated: false,
                activationLink: activationLink
            },
            include: {
                roles: true
            }
        })

        await mailService.sendActivationMail(body.email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto = new UserDto({ id: user.id, email: user.email, roles: user.roles.map(role => role.role), isActivated: user.isActivated })
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { tokens: tokens, user: user }
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                roles: true
            }
        })
        if (!user) {
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            throw ApiError.BadRequest('Не верный пароль')
        }
        const userDto = new UserDto({ id: user.id, email: user.email, roles: user.roles.map(role => role.role), isActivated: user.isActivated })
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { tokens: tokens, user: userDto }
    }

    async logout(refreshToken: string) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async activate(activationLink: string) {
        const user = await prisma.user.findFirst({
            where: {
                activationLink: activationLink
            }
        })
        if (!user) {
            throw ApiError.BadRequest("Некорректная ссылка активации")
        }
        await prisma.user.update({
            where: {
                activationLink: activationLink
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
            },
            include: {
                roles: true
            }
        })
        if (!user) {
            throw ApiError.BadRequest('Пользователь не найден')
        }

        const userDto = new UserDto({ id: user.id, email: user.email, roles: user.roles.map(role => role.role), isActivated: user.isActivated })
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { tokens: tokens, user: userDto }
    }
}

export default new AuthService()
