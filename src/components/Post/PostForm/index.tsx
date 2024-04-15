'use client'

import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import { NewPost } from '@/utils/types'

type PostFormInputs = {
    title: string
    text: string
}

type PostFormProps = {
    onFormSubmit: (newPost: NewPost) => Promise<void>
    className?: string
}

const PostForm: FC<PostFormProps> = ({ onFormSubmit, className }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<PostFormInputs>()
    const onSubmit = async ({ title, text }: PostFormInputs) => {
        setIsLoading(true)
        await onFormSubmit({ title, text })
        setIsLoading(false)
        reset()
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex flex-col gap-2 rounded-xl bg-gray-900 p-6 ${className}`}
        >
            <label className={'w-min'}>
                <span>Заголовок</span>
                <input
                    type="text"
                    className={'rounded p-2 text-black'}
                    {...register('title', {
                        required: 'Обязательное поле',
                    })}
                    placeholder={'Заголовок'}
                />
            </label>
            <label className={'w-min'}>
                <span>Текст</span>
                <textarea
                    className={'resize-none rounded p-2 text-black'}
                    {...register('text', {
                        required: 'Обязательное поле',
                    })}
                    cols={30}
                    rows={3}
                    placeholder={'Текст'}
                />
            </label>
            {errors.root && <p>{errors.root.message}</p>}
            <Button disabled={isLoading}>{isLoading ? 'Загрузка...' : 'Создать'}</Button>
        </form>
    )
}

export default PostForm
