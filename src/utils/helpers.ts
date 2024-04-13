export const getAccessToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('access_token')
    }
}

export const setAccessToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', token)
    }
}

export const removeAccessToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token')
    }
}

export const formatDatetime = (datetime: string): string => {
    return new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(datetime))
}
