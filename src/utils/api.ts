import axios from 'axios'

export const API_URL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost'

export const API_SETTINGS = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
}

export const api = axios.create(API_SETTINGS)
