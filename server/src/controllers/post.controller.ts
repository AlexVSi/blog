import { Request, Response } from 'express'
import postServices from '../services/post.service'
import { IPost } from 'interfaces'


class PostController {
    async getAllPosts(req: Request, res: Response) {
        try {
            const posts: IPost[] = await postServices.getAllPosts()
            return res.json(posts)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async getPostById(req: Request, res: Response) {
        try {
            const post = await postServices.getPostById(req.params.id)
            return res.json(post)
        } catch(e) {
            return res.status(500).json(e)
        }
    }

    async getUserPosts(req: Request, res: Response) {
        try {
            const posts = await postServices.getUserPosts(req.params.email)
            return res.json(posts)
        } catch (e) {
            console.log(e);
        }
    }

    async addPost(req: Request, res: Response) {
        try {
            const newPost = await postServices.addPost(req.body)
            return res.json(newPost)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async updatePost(req: Request, res: Response) {
        try {
            const updatedPost = await postServices.updatePost(req.body)
            return updatedPost
        } catch (e) {
            return res.status(500).json(e)
        }
    }
    async deletePost(req: Request, res: Response) {
        try {
            const deletedPost = await postServices.deletePost(req.params.id)
            return deletedPost
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default new PostController()
