import { createSlice } from '@reduxjs/toolkit'

const STATE = { token: ``, admin: `` }

const AUTH_SLICE = {
  name: 'auth',
  initialState: STATE,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, name } = action.payload
      console.log(accessToken, name)
      state.token = accessToken
      state.admin = name
    },
    logout: (state, action) => {
      state.token = ''
    },
  },
}

const authSlice = createSlice(AUTH_SLICE)

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectAdmin = (state) => state.auth.admin
