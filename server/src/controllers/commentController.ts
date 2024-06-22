import { Request, Response } from 'express'
import commentServices from 'services/commentServices.js'

class CommentController {
	async getAllCommentsToPost(req: Request, res: Response) {
		try {
			const comments = await commentServices.getAllCommentsToPost(req.params.postId)
			return res.json(comments)
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async addComment(req: Request, res: Response) {
		try {
			return 
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async deleteComment(req: Request, res: Response) {
		try {
			return 
		} catch(e) {
			return res.status(500).json(e)
		}
	}

	async editComment(req: Request, res: Response) {
		try {
			return 
		} catch(e) {
			return res.status(500).json(e)
		}
	}
}

export default new CommentController()
