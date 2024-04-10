import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'ScrScr',
    description: 'ScrScr - social network',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <h1 className={'sr-only'}>ScrScr - social network</h1>
        <main className={'h-dvh'}>
            <div className={'container mx-auto'}>
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
