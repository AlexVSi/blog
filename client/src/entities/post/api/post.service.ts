import $api from "@shared/http";
import { IPost } from "../model/IPost";
import { AxiosResponse } from "axios";

export default class PostService {
    static async fetchAllPosts(): Promise<AxiosResponse<IPost[]>> {
        return await $api.get<IPost[]>('posts')
    }

    static async fetchUserPosts(email: string): Promise<AxiosResponse<IPost[]>> {
        return await $api.get<IPost[]>(`posts/user/${email}`)
    }

    static async fetchPostById(id: string): Promise<AxiosResponse<IPost>> {
        return await $api.get<IPost>(`posts/${id}`)
    }

    static async createPost(post: IPost): Promise<AxiosResponse<IPost>> {
        return await $api.post<IPost>(`posts/create`, post)
    }
}
