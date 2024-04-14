import { User } from '@/utils/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserData, login, logout, register } from '@/store/reducers/ActionCreators'

type AuthState = {
    user: User
}

const initialState = {
    user: {},
}  as AuthState

const emptyUser: User = {
    username: '',
    password: '',
    email: '',
    is_staff: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(
                fetchUserData.fulfilled, (state, action) => {
                    state.user = action.payload;
                }
            );

            builder.addCase(
                fetchUserData.rejected, (state, action) => {
                    state.user = emptyUser
                }
            );

            builder.addCase(
                fetchUserData.pending, (state, action) => {
                    state.user = emptyUser
                }
            );

            builder.addCase(
                logout.fulfilled, (state) => {
                    state.user = emptyUser;
                }
            );

            builder.addCase(
                register.fulfilled, (state, action) => {
                    state.user = action.payload;
                }
            );
            builder.addCase(
                login.fulfilled, (state, action) => {
                    state.user = action.payload;
                }
            );
        }
})

export default authSlice.reducer
