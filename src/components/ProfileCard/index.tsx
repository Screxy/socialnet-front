import React, { FC } from 'react'
import { User } from '@/utils/types'

type ProfileCardProps = {
    user: User
}

const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}



export default ProfileCard
