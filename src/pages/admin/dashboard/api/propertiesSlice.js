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
    // isHouse: false,
  },
  recentProperties: null,
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
      const land = action.payload.user_land_properties
      state.userLandProperties = land
    },

    setRecentProperties: (state, action) => {
      const { recentProperties } = action.payload
      state.recentProperties = recentProperties
    },

    setUserHouseProperties: (state, action) => {
      const house = action.payload.user_house_properties
      state.userHouseProperties = house
    },

    changePropertyState: (state, action) => {
      console.log(action)
      state.propertyState = {
        isLand: action.payload,
        // isHouse: action.payload.houseBtn,
      }
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
} = propertiesSlice.actions

export default propertiesSlice.reducer

export const selectAllProperty = (state) => state.properties.allProperties
export const selectDashboardData = (state) => state.properties.dashboardData
export const selectHouseProperties = (state) => state.properties.houseProperties
export const selectLandProperty = (state) => state.properties.landProperties
export const selectPropertyDetails = (state) => state.properties.propertyDetails

// ============ external API ===================================================
export const selectUserLandProperties = (state) =>
  state.properties.userLandProperties
export const selectUserHouseProperties = (state) =>
  state.properties.userHouseProperties
export const selectPropertyState = (state) => state.properties.propertyState
export const selectRecentProperties = (state) =>
  state.properties.recentProperties
