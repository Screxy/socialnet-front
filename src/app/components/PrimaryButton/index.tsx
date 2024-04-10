import * as React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    disabled: boolean
};
export const Button: React.FC<ButtonProps> = ({children, disabled}) => {
    return (
        <button
            className={'rounded-xl bg-blue-700 p-2'}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
