'use client'
import React from 'react'
import LoginForm from '@/app/components/LoginForm'
import { authSlice } from '@/store/reducers/AuthSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { Button } from '@/app/components/PrimaryButton'

const Page = () => {
    // const {increment} = authSlice.actions
    const dispatch = useAppDispatch()
    // const {count}=useAppSelector(state => state.auth)
    return (
        <section className={'mt-auto flex h-fit flex-col items-center justify-center'}>
            <h2 className={'text-xl font-bold'}>Авторизация</h2>
            <div className={'mt-2'}>
                {/*{count*/}
                {/*}*/}
                {/*<Button onClick={()=>dispatch(increment(1))}>increment</Button>*/}
                <LoginForm />
            </div>
        </section>
    )
}

export default Page
