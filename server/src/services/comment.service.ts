import { prisma } from "prisma"

interface Comment {
    postId: string
    userId: string
    comment: string
    date: Date
}

class CommentServices {
    async getAllCommentsToPost(postId: string) {
        const comments = await prisma.comment.findMany({
            where: {
                postId: postId
            }
        })
        return comments
    }

    async addComment(body: Comment) {
        const post = await prisma.comment.create({ data: body })
    }

    async deleteComment() {

    }

    async editComment() {

    }
}

export default new CommentServices()
