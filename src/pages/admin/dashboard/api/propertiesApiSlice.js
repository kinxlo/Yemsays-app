// import { logOut, setCredentials } from './propertiesSlice'
import { apiSlice } from '../../../../app/api/apiSlice'
import {
  setDashboardData,
  setProperties,
  setPropertyDetails,
  setUserHouseProperties,
  setUserLandProperties,
} from './propertiesSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // sendMediaToGoogleApi: builder.mutation({
    //   query: (credentials) => ({
    //     url: credentials.url,
    //     method: 'POST',
    //     body: { ...credentials.body },
    //   }),
    // }),

    // NOT IN USE AT THE MOMENT

    addProperty: builder.mutation({
      query: (credentials) => ({
        url: '/property/admin',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    getDashboardData: builder.mutation({
      query: () => ({
        url: 'property/admin/dashboard',
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setDashboardData({
              dashboardData: data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getAllProperties: builder.mutation({
      query: () => ({
        url: '/property/admin',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setProperties({
              properties: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getPropertyByID: builder.mutation({
      query: (id) => ({
        url: `property/admin/${id}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setPropertyDetails({
              propertyDetails: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    listProperty: builder.mutation({
      query: (credentials) => ({
        url: `property/admin/listing/${credentials.id}`,
        method: 'PATCH',
        body: { ...credentials.body },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setPropertyDetails({
              propertyDetails: data.data.property,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    editProperty: builder.mutation({
      query: (credentials) => ({
        url: `property/admin/${credentials.id}`,
        method: 'PUT',
        body: { ...credentials.body },
      }),
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled
      //     console.log(data)
      //     dispatch(
      //       setPropertyDetails({
      //         propertyDetails: data.data.property,
      //       })
      //     )
      //   } catch (err) {
      //     console.log(err)
      //   }
      // },
    }),

    // ========== External API ==================

    listLandProperties: builder.mutation({
      query: () => ({
        url: `property/lands`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setUserLandProperties({
              user_land_properties: data.listedLands,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    listHouseProperties: builder.mutation({
      query: () => ({
        url: `property/houses`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setUserHouseProperties({
              user_house_properties: data.listedHouses,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getPropertyByIDClient: builder.mutation({
      query: (id) => ({
        url: `property/${id}`,
        method: 'GET',
      }),
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled
      //     dispatch(
      //       setPropertyDetailsC\({
      //         propertyDetails: data.data,
      //       })
      //     )
      //   } catch (err) {
      //     console.log(err)
      //   }
      // },
    }),

    addReview: builder.mutation({
      query: (credentials) => ({
        url: `/property/review/${credentials.propertyId}`,
        method: 'POST',
        body: { ...credentials.body },
      }),
    }),

    contactUs: builder.mutation({
      query: (credentials) => ({
        url: `/mailing/contact-us`,
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    bookApointment: builder.mutation({
      query: (credentials) => ({
        url: `/mailing/appointment`,
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    // ========== External API ==================
  }),
})

export const {
  useGetDashboardDataMutation,
  useSendMediaToGoogleApiMutation,
  useGetSignedURLMutation,
  useAddPropertyMutation,
  useGetAllPropertiesMutation,
  useGetPropertyByIDMutation,
  useListPropertyMutation,
  useEditPropertyMutation,
  useListHousePropertiesMutation,
  useListLandPropertiesMutation,
  useGetPropertyByIDClientMutation,
  useAddReviewMutation,
  useContactUsMutation,
  useBookApointmentMutation,
  // useRefreshMutation,
} = authApiSlice
