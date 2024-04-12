'use client'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/app/components/PrimaryButton'
import { useAppDispatch } from '@/hooks/redux'
import { login, register as registerUser } from '@/store/reducers/ActionCreators'

type FormInputs = {
    email: string
    password: string
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
        formState: { isSubmitSuccessful, errors },
    } = useForm<FormInputs>()
    const dispatch = useAppDispatch()
    const onSubmit = async ({ email, password }: FormInputs) => {
        setIsLoading(true)
        try {
            const response = await dispatch(login({ email, password }))
            if (response.meta.requestStatus === 'fulfilled') {
                router.push('/')
            } else {
                setError('root', {message: 'Неверный email или пароль!'})
            }
        } catch (e) {
            setError('root', { message: 'Произошла неизвестная ошибка!' })
        }
        setIsLoading(false)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={'flex flex-col items-center gap-2 rounded-xl bg-gray-900 p-6'}
        >
            <label className={'w-min'}>
                <input
                    type="text"
                    className={'rounded p-2 text-black'}
                    {...register('email', {
                        required: 'Обязательное поле',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email',
                        },
                    })}
                    placeholder={'Почта'}
                />
            </label>
            <label className={'w-min'}>
                <input
                    type="password"
                    className={'rounded p-2 text-black'}
                    {...register('password', {
                        required: 'Обязательное поле',
                        minLength: 8,
                    })}
                    placeholder={'Пароль'}
                />
            </label>
            {errors.root && <p>{errors.root.message}</p>}
            <Button disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Войти'}</Button>
        </form>
    )
}

export default Register
