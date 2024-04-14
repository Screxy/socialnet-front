'use client'

import { useEffect, useState } from 'react'
import { NewPost, PostDetail } from '@/utils/types'
import Post from '@/components/Post'
import { api } from '@/utils/api'
import { useAppSelector } from '@/hooks/redux'
import ProfileCard from '@/components/ProfileCard'
import PostForm from '@/components/Post/PostForm'

export default function Posts() {
    const { user } = useAppSelector((state) => state.auth)
    const [posts, setPosts] = useState<PostDetail[]>([])
    const fetchPosts = () => {
        api.get<PostDetail[]>('/post/my')
            .then((response) => {
                const posts = response.data
                setPosts(posts.reverse())
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
    const onFormSubmitHandler = async (newPost: NewPost) => {
        console.log('asd')
        try {
            const {data} = await api.post<PostDetail>('post', newPost)
            setPosts([data, ...posts])
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div className={'mt-2 flex items-center flex-col'}>
            <ProfileCard user={user} />
            <PostForm onFormSubmit={onFormSubmitHandler} className={'mt-4 '}/>
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
