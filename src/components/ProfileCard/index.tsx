import React, { FC } from 'react'
import { User } from '@/utils/types'

type ProfileCardProps = {
    user: User
    className?: string
}

const ProfileCard: FC<ProfileCardProps> = ({ user, className }) => {
    return (
        <div className={`flex flex-col rounded-3xl bg-gray-900 px-6 py-4 ${className}`}>
            <p className={'text-center text-xl font-bold'}>Ваш профиль</p>
            <div className={'mt-2'}>
                <p>Имя пользователя: {user.username}</p>
                <p>Электронная почта: {user.email}</p>
            </div>
        </div>
    )
}

export default ProfileCard
