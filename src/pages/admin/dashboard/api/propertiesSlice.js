import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  // allProperties: null,
  dashboardData: null,
  houseProperties: null,
  landProperties: null,
  propertyDetails: null,
  userLandProperties: null,
  userHouseProperties: null,
  propertyState: {
    isLand: true,
    isLandListingLoading: false,
    isHouseListingLoading: false,
    // isHouse: false,
  },
  recentProperties: null,
  currency: `NGN`,
}

const PROPERTIES_SLICE = {
  name: 'properties',
  initialState: STATE,
  reducers: {
    setProperties: (state, action) => {
      const { properties } = action.payload
      // state.allProperties = properties
      state.houseProperties = properties.houses
      state.landProperties = properties.lands
    },

    setDashboardData: (state, action) => {
      const { dashboardData } = action.payload
      state.dashboardData = dashboardData
    },

    setPropertyDetails: (state, action) => {
      const { propertyDetails } = action.payload
      state.propertyDetails = propertyDetails
    },

    // ======= external API ===================
    setUserLandProperties: (state, action) => {
      const { user_land_properties, isLandLoading } = action.payload
      state.userLandProperties = user_land_properties
      state.propertyState.isLandListingLoading = isLandLoading
    },

    setRecentProperties: (state, action) => {
      const { recentProperties } = action.payload
      state.recentProperties = recentProperties
    },

    setUserHouseProperties: (state, action) => {
      const { user_house_properties } = action.payload
      state.userHouseProperties = user_house_properties
    },

    changePropertyState: (state, action) => {
      state.propertyState = {
        isLand: action.payload.isLand,
        isLandListingLoading: action.payload.isLandLoading,
        isHouseListingLoading: action.payload.isHouseLoading,
        // isHouse: action.payload.houseBtn,
      }
    },
    changeCurrency: (state, action) => {
      const { currency } = action.payload
      state.currency = currency
    },
    // ======= external API ===================
  },
}

const propertiesSlice = createSlice(PROPERTIES_SLICE)

export const {
  setDashboardData,
  setProperties,
  setPropertyDetails,
  setUserLandProperties,
  setUserHouseProperties,
  setRecentProperties,
  changePropertyState,
  changeCurrency,
} = propertiesSlice.actions

export default propertiesSlice.reducer

export const selectAllProperty = (state) => state.properties.allProperties
export const selectDashboardData = (state) => state.properties.dashboardData
export const selectHouseProperties = (state) => state.properties.houseProperties
export const selectLandProperty = (state) => state.properties.landProperties
export const selectPropertyDetails = (state) => state.properties.propertyDetails
export const selectCurrency = (state) => state.properties.currency

// ============ external API ===================================================
export const selectUserLandProperties = (state) =>
  state.properties.userLandProperties
export const selectUserHouseProperties = (state) =>
  state.properties.userHouseProperties
export const selectPropertyState = (state) => state.properties.propertyState
export const selectRecentProperties = (state) =>
  state.properties.recentProperties
