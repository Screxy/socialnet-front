export const getAccessToken = () => {
    return localStorage.getItem('access_token')
}

export const setAccessToken = (token: string) => {
    localStorage.setItem('access_token', token)
}

export const removeAccessToken = () => {
    localStorage.removeItem('access_token')
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
