import React from 'react'
import Link from 'next/link'
import AuthControls from '@/components/AuthControls'

const Header = () => {
    return (
        <header className={'bg-gray-900'}>
            <div className="container mx-auto py-2 flex items-center px-4 justify-between">
                <span >ScrScr</span>
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
                </ul>
                <AuthControls/>
            </div>
        </header>
    )
}

export default Header
