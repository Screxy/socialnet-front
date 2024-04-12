import * as React from 'react'
import { PostDetail } from '@/utils/types'
import { FC } from 'react'

type PostProps = {
    post: PostDetail
}
export const Post: FC<PostProps> = ({ post }) => {
    return (
        <div className={'border rounded-xl px-6 py-4'}>
            <h2 className={'font-bold text-2xl'}>{post.title}</h2>
            <p className={'text-xl'}>{post.text}</p>
            <data className={'text-sm'}>{post.created_at}</data>
        </div>
    )
}
export default Post
