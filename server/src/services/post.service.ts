import { IPost } from '../interfaces'
import { prisma } from 'prisma'

class PostsServices {
    async getAllPosts() {
        const posts = await prisma.post.findMany()
        return posts
    }

    async getPostById(id: string) {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return post
    }

    async getUserPosts(email: string) {
        const user = await prisma.user.findUnique({ where: { email: email }, include: { posts: true } })
        return user?.posts
    }

    async addPost(body: IPost) {
        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                description: body.description,
                userId: body.userId
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
