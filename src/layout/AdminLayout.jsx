import { Box } from '@chakra-ui/react'
// import Footer from 'components/footer/FooterAdmin.js'
// Layout components
import React from 'react'
import routes from '../routes'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import AdminNavbar from './AdminNavbar'

const AdminLayout = (props) => {
  const { ...rest } = props

  return (
    <div>
      <>
        <Sidebar routes={routes} display='none' {...rest} />

        <Box
          bgColor={`bgBlack`}
          color={`white`}
          float='right'
          minHeight='100vh'
          height='100%'
          overflow='auto'
          position='relative'
          maxHeight='100%'
          w={{ base: '100%', xl: 'calc( 100% - 300px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 300px )' }}
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'
        >
          <Box bgColor={`dashboardBG`}>
            <AdminNavbar />
          </Box>
          <Box
            mx='auto'
            p={{ base: '20px', md: '30px' }}
            pe='20px'
            minH='100vh'
            pt='50px'
          >
            <Outlet />
          </Box>
        </Box>
      </>
    </div>
  )
}

export default AdminLayout
