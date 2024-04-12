'use client'

import { useEffect, useState } from 'react'
import { PostDetail } from '@/utils/types'
import Post from '@/app/components/Post'
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
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div className={'mt-2'}>
            {!posts && <p>Постов нет(</p>}
            <ul>
                {posts.map((post) => (
                    <li className={'mt-4'} key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
