import { prisma } from 'prisma'

class UserSrvice {
    async getAllUsers() {
        const users = await prisma.user.findMany({ include: { roles: true } })
        return users
    }
}

export default new UserSrvice()
