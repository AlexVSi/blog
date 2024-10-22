import { IPost } from '../interfaces'
import { prisma } from 'prisma'
import ApiError from 'exceptions/api.error'

class PostsServices {
    async getAllPosts() {
        const posts = await prisma.post.findMany({ include: { user: { select: { email: true } } } })
        return posts
    }

    async getPostById(id: string) {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
            include: { user: { select: { email: true } } }
        })
        return post
    }

    async getUserPosts(email: string) {
        const user = await prisma.user.findUnique({ where: { email: email }, include: { posts: true } })
        if (!user) {
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const posts = await prisma.post.findMany({ where: { userId: user.id }, include: { user: { select: { email: true } } } })
        if (!posts) {
            throw ApiError.BadRequest('Постов нет')
        }
        return posts
    }

    async createPost(body: IPost) {
        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                description: body.description,
                content: body.content,
                userId: body.userId,
            }
        })
        return newPost
    }

    async updatePost(body: IPost) {
        const updatedPost = await prisma.post.update({
            data: {
                title: body.title,
                description: body.description,
            },
            where: {
                id: body.id
            }
        })
        return updatedPost
    }

    async deletePost(id: string) {
        const deletedPost = await prisma.post.delete({
            where: {
                id: id
            }
        })
        return deletedPost
    }
}

export default new PostsServices()
