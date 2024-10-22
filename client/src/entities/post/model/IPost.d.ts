export interface IPost {
    id: string
    title: string
    description: string
    content: string
    userId: string
    user: {
        email: string
    }
}
