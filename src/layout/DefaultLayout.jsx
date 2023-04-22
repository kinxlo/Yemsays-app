import React from 'react'
import { Outlet } from 'react-router-dom'
import BannerComponent from '../components/BannerComponent'
import Footer from './Footer'
import NavBar from './NavBar'

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <BannerComponent text={`Welcome to Yemsays Properties!`} />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
