import * as React from 'react'

type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
    return (
        <button className={'rounded-xl bg-blue-700 p-2 hover:bg-blue-500 transition-colors duration-300'} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
