'use client'
import React, {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import {Button} from '@/app/components/PrimaryButton'

type FormInputs = {
    username: string,
    password: string,
}
const Register = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState,
        setError,
        formState: {isSubmitSuccessful, errors},

    } = useForm<FormInputs>()
    const onSubmit = async ({username, password}: FormInputs) => {
        console.log('hello')
    }
    return (
        <form onSubmit={handleSubmit(console.log)}
              className={'flex flex-col p-6 items-center gap-2 bg-gray-900 rounded-xl'}>
            <label className={'w-min'}>
                <input type="text" className={'text-black rounded p-2'}

                       {...register('username', {
                           required: 'Обязательное поле'
                       })}
                       placeholder={'Логин'}
                />
            </label>
            <label className={'w-min'}>
                <input type="password" className={'text-black rounded p-2'}

                       {...register('password', {
                           required: 'Обязательное поле',
                           minLength: 8
                       })}
                       placeholder={'Пароль'}
                />
            </label>
            {errors.root && (
                <p>
                    {errors.root.message}
                </p>
            )}
            <Button disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Создать аккаунт'}
            </Button>
        </form>
    )
}

export default Register
