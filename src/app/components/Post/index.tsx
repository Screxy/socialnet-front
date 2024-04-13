import * as React from 'react'
import { PostDetail } from '@/utils/types'
import { FC } from 'react'
import Icon from '@/app/components/Icon'

type PostProps = {
    post: PostDetail
    onLikeClick: (post: PostDetail) => void
}
export const Post: FC<PostProps> = ({ post, onLikeClick }) => {
    return (
        <div className={'flex flex-col rounded-xl border bg-gray-900/75 px-6 py-4'}>
            <h2 className={'text-2xl font-bold'}>{post.title}</h2>
            <p className={'text-xl'}>{post.text}</p>
            <data className={'text-sm'}>{post.created_at}</data>
            <div onClick={() => onLikeClick(post)}>
                {post.liked ? (
                    <Icon width={24} height={24}>
                        <svg
                            className="h-full w-full"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
                                fill="#e32400"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#232323"
                                strokeWidth="3.168"
                            />
                            <path
                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
                                fill="#e32400"
                            />
                        </svg>
                    </Icon>
                ) : (
                    <Icon width={24} height={24}>
                        <svg
                            className="h-full w-full"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
                                fill="#e32400"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#232323"
                                strokeWidth="3.168"
                            />
                            <path
                                d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
                                fill="#ffff"
                            />
                        </svg>
                    </Icon>
                )}
            </div>
        </div>
    )
}
export default Post
