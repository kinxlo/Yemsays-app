import { logout, setCredentials } from './authSlice'
import { apiSlice } from '../../../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCredentials({
              accessToken: data.data.accessToken,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    // sendLogout: builder.mutation({
    //   query: () => ({
    //     url: '/auth/logout',
    //     method: 'POST',
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled
    //       console.log(data)
    //       dispatch(logOut())
    //       setTimeout(() => {
    //         dispatch(apiSlice.util.resetApiState())
    //       }, 1000)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   },
    // }),

    // refresh: builder.mutation({
    //   query: () => ({
    //     url: '/auth/refresh',
    //     method: 'GET',
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled
    //       console.log(data)
    //       const { accessToken } = data
    //       dispatch(setCredentials({ accessToken }))
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   },
    // }),
  }),
})

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useSignupMutation,
  // useRefreshMutation,
} = authApiSlice
