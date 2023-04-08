import { createSlice } from '@reduxjs/toolkit'

const STATE = { token: `null` }

const AUTH_SLICE = {
  name: 'auth',
  initialState: STATE,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logout: (state, action) => {
      state.token = null
    },
  },
}

const authSlice = createSlice(AUTH_SLICE)

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
