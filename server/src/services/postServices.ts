import { Posts } from '../models/models.js'
class PostsServices {
	async getAllPosts() {
		const posts = await Posts.findAll()
		return posts
	}

	async getPostById(id) {
		const post = await Posts.findAll({
			where: {
				id: id
			}
		})
		return post[0]
	}

	async addPost(body) {
		const newPost = await Posts.create({
			id: null,
			title: body.title,
			description: body.description,
			UserId: body.UserId
		})
		return newPost
	}

	async updatePost(body) {
		const updatedPost = await Posts.update({
			title: body.title,
			description: body.description,
		}, {
			where: {
				id: id
			}
		})
		return updatedPost
	}

	async deletePost() {
		const deletedPost = await Posts.destroy({
			where: {
				id: id
			}
		})
		return deletedPost
	}
}

export default new PostsServices()
