import { Comments } from '../models/models'
class CommentServices {
	async getAllCommentsToPost(postId: number) {
		const comments = await Comments.findAll({
			where: {
				PostId: postId
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
