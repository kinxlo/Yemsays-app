import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerComponent from '../components/BannerComponent'
import Footer from './Footer'
import NavBar from './NavBar'

// eslint-disable-next-line react/prop-types
const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <BannerComponent
        text={`Welcome to Yemsays Properties!. Your one-stop shop for affordable lands and houses.`}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
