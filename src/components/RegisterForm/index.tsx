'use client'

import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/redux'
import { register as registerUser } from '@/store/reducers/ActionCreators'
import Button from '@/components/Button'

type FormInputs = {
    username: string
    first_name: string
    last_name: string
    email: string
    password: string
    passwordRepeat: string
}

type RegisterFormProps = {
    className?: string
}

const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormInputs>()
    const dispatch = useAppDispatch()
    const onSubmit = async ({ username, password, email }: FormInputs) => {
        setIsLoading(true)
        try {
            const response = await dispatch(
                registerUser({ username, password, email, is_staff: false }),
            )
            if (response.meta.requestStatus === 'fulfilled') {
                router.push('/login')
            } else {
                setError('root', { message: 'Произошла неизвестная ошибка!' })
            }
        } catch (e) {
            setError('root', { message: 'Произошла неизвестная ошибка!' })
        }
        setIsLoading(false)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex flex-col items-center gap-2 rounded-xl bg-gray-900 p-6 ${className}`}
        >
            <label className={'w-min'}>
                <input
                    type="text"
                    className={'rounded p-2 text-black'}
                    {...register('username', {
                        required: 'Обязательное поле',
                    })}
                    placeholder={'Логин'}
                />
            </label>
            {errors.username && <p>{errors.username.message}</p>}
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
            {errors.email && <p>{errors.email.message}</p>}

            <label className={'w-min'}>
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
            {errors.password && <p>{errors.password.message}</p>}

            <label className={'w-min'}>
                <input
                    type="password"
                    className={'rounded p-2 text-black'}
                    {...register('passwordRepeat', {
                        required: 'Обязательное поле',
                        minLength: { value: 6, message: 'Пароль должен быть длиннее 6 символов' },
                        validate: (value, formValues) => value === formValues.password,
                    })}
                    placeholder={'Пароль ещё раз'}
                />
            </label>
            {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}

            {errors.root && <p>{errors.root.message}</p>}
            <Button disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Создать аккаунт'}</Button>
        </form>
    )
}

export default RegisterForm
