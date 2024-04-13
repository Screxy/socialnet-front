'use client'

import { useEffect, useState } from 'react'
import { PostDetail } from '@/utils/types'
import Post from '@/components/Post'
import { api } from '@/utils/api'
import { useAppSelector } from '@/hooks/redux'
import ProfileCard from '@/components/ProfileCard'

export default function Posts() {
    const { user } = useAppSelector((state) => state.auth)
    const [posts, setPosts] = useState<PostDetail[]>([])
    const fetchPosts = () => {
        api.get<PostDetail[]>('/post/my')
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
        <div className={'mt-2 flex items-center flex-col'}>
            <ProfileCard user={user} className={'max-w-screen-sm '} />

            <span>Ваши посты:</span>
            <div className={'mt-2 w-full'}>
                {!posts && <p>Постов нет(</p>}
                <ul className={'max-w-screen-sm mx-auto'}>
                    {posts.map((post) => (
                        <li className={'mt-4'} key={post.id}>
                            <Post post={post} onLikeClick={onClickLikeHandler} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
