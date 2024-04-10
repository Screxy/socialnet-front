import React from 'react'
import RegisterForm from '@/app/components/RegisterForm'

const Page = () => {
    return (
        <section className={'flex h-dvh flex-col items-center justify-center'}>
            <h2 className={'text-xl font-bold'}>Регистрация</h2>
            <div className={'mt-2'}>
                <RegisterForm />
            </div>
        </section>
    )
}

export default Page
