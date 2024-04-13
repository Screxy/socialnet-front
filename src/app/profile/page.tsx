'use client'

import { useEffect, useState } from 'react'
import { PostDetail } from '@/utils/types'
import Post from '@/components/Post'
import { api } from '@/utils/api'
import { useAppSelector } from '@/hooks/redux'
import ProfileCard from '@/components/ProfileCard'

export default function Posts() {
    const { user } = useAppSelector((state) => state.auth)
    // const [posts, setPosts] = useState<PostDetail[]>([])
    // const fetchPosts = () => {
    //     api.get<PostDetail[]>('/post')
    //         .then((response) => {
    //             const posts = response.data
    //             setPosts(posts)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    // const onClickLikeHandler = (post: PostDetail) => {
    //     api.post(`/post/${post.id}/setLike`, {
    //         like: !post.liked,
    //     })
    //         .then(() => {
    //             fetchPosts()
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    // useEffect(() => {
    //     fetchPosts()
    // }, [])
    return (
        <div className={'mt-2'}>
            <ProfileCard user={user} />
        </div>
    )
}
