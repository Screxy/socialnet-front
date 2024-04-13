'use client'

import { useEffect, useState } from 'react'
import { PostDetail } from '@/utils/types'
import Post from '@/components/Post'
import { api } from '@/utils/api'

export default function Posts() {
    const [posts, setPosts] = useState<PostDetail[]>([])
    const fetchPosts = () => {
        api.get<PostDetail[]>('/post')
            .then((response) => {
                const posts = response.data
                setPosts(posts)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const onClickLikeHandler = (post: PostDetail) => {
        api.post(`/post/${post.id}/setLike`, {
            like: !post.liked,
        })
            .then(() => {
                fetchPosts()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div className={'mt-2 mx-auto max-w-screen-sm'}>
            {!posts && <p>Постов нет(</p>}
            <ul className={''}>
                {posts.map((post) => (
                    <li className={'mt-4'} key={post.id}>
                        <Post post={post} onLikeClick={onClickLikeHandler} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
