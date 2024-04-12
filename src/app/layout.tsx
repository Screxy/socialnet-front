import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Header from '@/app/components/Header'
import { Providers } from '@/utils/providers'
import UserDataFetcher from '@/app/components/UserDataFetcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ScrScr',
    description: 'ScrScr - social network',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Providers>
                    <UserDataFetcher/>
                    <h1 className={'sr-only'}>ScrScr - social network</h1>
                    <main className={'min-h-screen'}>
                        <Header />
                        <div className={'container mx-auto'}>{children}</div>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
