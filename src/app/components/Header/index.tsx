import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={'bg-gray-900'}>
            <div className="container mx-auto py-2">
                <span>ScrScr - социальная сеть</span>
                <ul className={'flex gap-2'}>
                    <li>
                        <Link
                            href={'/'}
                            className={'transition-colors duration-300 hover:text-red-300'}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/posts'}
                            className={'transition-colors duration-300 hover:text-red-300'}
                        >
                            Посты пользователей
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/login'}
                            className={'transition-colors duration-300 hover:text-red-300'}
                        >
                            Войти
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/register'}
                            className={'transition-colors duration-300 hover:text-red-300'}
                        >
                            Зарегистрироваться
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
