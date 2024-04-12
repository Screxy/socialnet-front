import * as React from 'react'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
}
export const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
    return (
        <button className={'rounded-xl bg-blue-700 p-2'} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}
