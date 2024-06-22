import { Request, Response } from 'express'
import postServices from 'services/postServices.js'

class PostController {
	async getAllPosts(req, res) {
		try {
			const posts = await postServices.getAllPosts()
			return res.json(posts)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async getPostById(req, res) {
		try {
			const post = await postServices.getPostById(req.params.id)
			return res.json(post)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async addPost(req, res) {
		try {
			const newPost = await postServices.addPost(req.body)
			return res.json(newPost)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async updatePost(req, res) {
		try {
			const updatedPost = await postServices.updatePost(req.body)
			return updatedPost
		} catch(e) {
			return res.status(500).json(e)
		}
	}
	async deletePost(req, res) {
		try {
			const deletedPost = await postServices.deletePost(req.params.id)
			return deletedPost
		} catch(e) {
			return res.status(500).json(e)
		}
	}
}

export default new PostController()
