'use client'

import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import Link from 'next/link'
import Button from '@/components/Button'
import { logout } from '@/store/reducers/ActionCreators'

const AuthControls: FC = () => {
    const { user } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    const onClickHandler = async () => {
        dispatch(logout())
    }

    return (
        <div className="flex items-center gap-2">
            {user.id ? (
                <>
                    <Link
                        href={'/profile'}
                        className={'transition-colors duration-300 hover:text-red-300'}
                    >
                        Мой профиль
                    </Link>
                    <Button onClick={onClickHandler}>Выйти</Button>
                </>
            ) : (
                <>
                    <Link
                        href={'/login'}
                        className={'transition-colors duration-300 hover:text-red-300'}
                    >
                        Войти
                    </Link>
                    <Link
                        href={'/register'}
                        className={'transition-colors duration-300 hover:text-red-300'}
                    >
                        Зарегистрироваться
                    </Link>
                </>
            )}
        </div>
    )
}

export default AuthControls
