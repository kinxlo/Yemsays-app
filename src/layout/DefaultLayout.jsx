import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
