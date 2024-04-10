'use client'
import React, {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import {Button} from '@/app/components/PrimaryButton'

type FormInputs = {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    passwordRepeat: string,
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
    const onSubmit = async ({username, password, email, first_name, last_name}: FormInputs) => {
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
                <input type="text" className={'text-black rounded p-2'}

                       {...register('email', {
                           required: 'Обязательное поле',
                           pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                               message: 'Введите корректный email'
                           }
                       })}
                       placeholder={'Почта'}
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
            <label className={'w-min'}>
                <input type="password" className={'text-black rounded p-2'}

                       {...register('passwordRepeat', {
                           required: 'Обязательное поле',
                           minLength: 8,

                       })}
                       placeholder={'Пароль ещё раз'}
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
