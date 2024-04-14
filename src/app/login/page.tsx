'use client'

import React from 'react'
import LoginForm from '@/components/LoginForm'

const Page = () => {
    return (
        <section className={'mt-auto flex h-fit flex-col items-center justify-center'}>
            <h2 className={'text-xl font-bold'}>Авторизация</h2>
            <div className={'mt-2'}>
                <LoginForm />
            </div>
        </section>
    )
}

export default Page
