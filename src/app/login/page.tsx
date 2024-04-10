import React from 'react'
import LoginForm from '@/app/components/LoginForm'

const Page = () => {
    return (
        <section className={'flex flex-col items-center'}>
            <h2 className={'font-bold text-xl'}>Авторизация</h2>
            <div className={'mt-2'}>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Page
