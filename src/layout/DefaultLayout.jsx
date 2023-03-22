import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
