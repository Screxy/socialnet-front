'use client'

import React from 'react'
import LoginForm from '@/components/LoginForm'

const Page = () => {
    return (
        <section className={'mt-auto flex h-fit flex-col items-center justify-center'}>
            <h2 className={'text-xl font-bold'}>Авторизация</h2>
            <LoginForm className={'mt-2 max-w-[260px]'} />
        </section>
    )
}

export default Page
