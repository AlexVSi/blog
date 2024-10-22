import PostService from "@entities/post/api/post.service";
import { IPost } from "@entities/post/model/IPost";
import { makeAutoObservable } from "mobx";

export default class PostStore {
    allPosts = {} as IPost[]
    userPosts = {} as IPost[]
    post = {} as IPost

    constructor() {
        makeAutoObservable(this)
    }

    setAllPosts(posts: IPost[]) {
        this.allPosts = posts
    }

    setUserPosts(posts: IPost[]) {
        this.userPosts = posts
    }

    setPost(post: IPost) {
        this.post = post
    }

    async fetchAllPosts() {
        try {
            const response = await PostService.fetchAllPosts()
            this.setAllPosts(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    async fetchUserPosts(email: string) {
        try {
            const response = await PostService.fetchUserPosts(email)
            this.setUserPosts(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    async fetchPostById(id: string){
        try {
            const response = await PostService.fetchPostById(id)
            this.setPost(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    async createPost(post: IPost) {
        try {
            const response = await PostService.createPost(post)
            this.userPosts.push(post)
        } catch (e) {
            console.log(e);
        }
    }
}
