import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginData, User } from '@/utils/types'
import { getAccessToken, removeAccessToken, setAccessToken } from '@/utils/helpers'
import { api } from '@/utils/api'

export const fetchUserData = createAsyncThunk<User>('auth/feed', async (_, { rejectWithValue }) => {
    try {
        const token = getAccessToken()
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`
        }
        const { data } = await api.get<User>('/feed')
        return data
    } catch (e: unknown) {
        if (e instanceof AxiosError) {
            const axiosError = e as AxiosError
            return rejectWithValue(axiosError.response?.data)
        }
        return rejectWithValue({})
    }
})

export const login = createAsyncThunk<User, LoginData>(
    'auth/authorize',
    async (payload, { dispatch }) => {
        const response = await api.post<{ access_token: string }>('/authorize', payload)
        setAccessToken(response.data.access_token)
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
        return (await dispatch(fetchUserData())).payload as User
    },
)

export const register = createAsyncThunk<User, User>(
    'auth/register',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await api.post<User>('/register', payload)
            return response.data
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const axiosError = error as AxiosError
                return rejectWithValue(axiosError.response?.data)
            }
            return rejectWithValue({})
        }
    },
)

export const logout = createAsyncThunk('auth/logout', async () => {
    await api.get('/logout')
    delete api.defaults.headers.common['Authorization']
    removeAccessToken()
})
