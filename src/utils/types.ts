export type User = {
    id?: number
    username: string
    password: string
    email: string
    is_staff: boolean
}

export type LoginData = Pick<User, 'email' | 'password'>

export type Post = {
    id: number
    title: string
    text: string
    created_at: string
    author: Pick<User, 'id'>
    liked: boolean
}

export type NewPost = Pick<Post, 'text' | 'title'>

export type PostDetail = Post
