import { prisma } from "prisma"


class CommentServices {
	async getAllCommentsToPost(postId: string) {
		const comments = await prisma.comment.findMany({
			where: {
				postId: postId
			}
		})
		return comments
	}

	async addComment() {
		
	}

	async deleteComment() {

	}

	async editComment() {

	}
}

export default new CommentServices()
