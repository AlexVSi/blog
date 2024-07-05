import { Posts } from '../models/models'
import { IPost } from './../interfaces'

class PostsServices {
	async getAllPosts() {
		const posts = await Posts.findAll()
		return posts
	}

	async getPostById(id: number) {
		const post = await Posts.findAll({
			where: {
				id: id
			}
		})
		return post[0]
	}

	async addPost(body: IPost) {
		const newPost = await Posts.create({
			id: null,
			title: body.title,
			description: body.description,
			UserId: body.UserId
		})
		return newPost
	}

	async updatePost(body: IPost) {
		const updatedPost = await Posts.update({
			title: body.title,
			description: body.description,
		}, {
			where: {
				id: body.id
			}
		})
		return updatedPost
	}

	async deletePost(id: number) {
		const deletedPost = await Posts.destroy({
			where: {
				id: id
			}
		})
		return deletedPost
	}
}

export default new PostsServices()
