import { verify } from 'crypto'
import jwt from 'jsonwebtoken'
import { prisma } from 'prisma'
interface IPayload {
	id: string
	email: string
	isActivated: boolean
}

interface IGenerateTokens {
	accessToken: string
	refreshToken: string
}

class TokenService {
	generateTokens(payload: IPayload): IGenerateTokens {
		const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: '30m' })
		const refreshToken: string = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: '15d' })
		return {
			accessToken,
			refreshToken
		}
	}

	validateAccessToken(token: string) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!)
			return userData
		} catch (e) {
			return null
		}
	}

	validateRefreshToken(token: string) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET!)
			return userData
		} catch (e) {
			return null
		}
	}

	async saveToken(userId: string, refreshToken: string) {
		const tokenData = await prisma.token.findFirst({ where: { userId: userId } })
		if (tokenData) {
			return await prisma.token.updateMany({
				where: {
					userId: userId
				},
				data: {
					refreshToken: refreshToken
				}
			})
		}
		const token = await prisma.token.create({
			data: {
				userId: userId,
				refreshToken: refreshToken
			}
		})
		return token
	}
	async removeToken(refreshToken: string) {
		const token = await prisma.token.delete({
			where: {
				refreshToken: refreshToken
			}
		})
		return token
	}

	async findToken(refreshToken: string) {
		const token = await prisma.token.findFirst({
			where: {
				refreshToken: refreshToken
			}
		})
		return token
	}
}

export default new TokenService()
