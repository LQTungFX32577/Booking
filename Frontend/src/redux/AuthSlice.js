import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    user: 'guest'
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: initialState,
   reducers: {

    login(state,action) {
       state.isLogin = true;
       state.user = action.payload
    },
    logout(state) {
        state.isLogin = false;
    }
   }
})
export const authAction = authSlice.actions;