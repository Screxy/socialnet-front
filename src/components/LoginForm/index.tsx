'use client'

import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/redux'
import { login } from '@/store/reducers/ActionCreators'
import Button from '@/components/Button'

type FormInputs = {
    email: string
    password: string
}

type LoginFormProps = {
    className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormInputs>()
    const dispatch = useAppDispatch()
    const onSubmit = async ({ email, password }: FormInputs) => {
        setIsLoading(true)
        try {
            const response = await dispatch(login({ email, password }))
            if (response.meta.requestStatus === 'fulfilled') {
                router.push('/')
            } else {
                setError('root', { message: 'Неверный email или пароль!' })
            }
        } catch (e) {
            setError('root', { message: 'Произошла неизвестная ошибка!' })
        }
        setIsLoading(false)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex w-full flex-col items-center gap-2 rounded-xl bg-gray-900 p-6 ${className}`}
        >
            <label className={'w-min'}>
                <span>Email</span>
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
            {errors.email && <p className={'text-center text-red-500'}>{errors.email.message}</p>}

            <label className={'w-min'}>
                <span>Пароль</span>
                <input
                    type="password"
                    className={'rounded p-2 text-black'}
                    {...register('password', {
                        required: 'Обязательное поле',
                        minLength: { value: 6, message: 'Пароль должен быть длиннее 6 символов' },
                    })}
                    placeholder={'Пароль'}
                />
            </label>
            {errors.password && (
                <p className={'text-center text-red-500'}>{errors.password.message}</p>
            )}
            {errors.root && <p>{errors.root.message}</p>}
            <Button disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Войти'}</Button>
        </form>
    )
}

export default LoginForm
