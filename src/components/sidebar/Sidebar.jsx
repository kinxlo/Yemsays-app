import React from 'react'

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Content from './components/Content'

// Assets
import { IoMenuOutline } from 'react-icons/io5'

function Sidebar(props) {
  // eslint-disable-next-line react/prop-types
  const { routes } = props

  let variantChange = '0.2s linear'
  // let shadow = useColorModeValue(
  //   '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
  //   'unset'
  // )
  // Chakra Color Mode
  let sidebarBg = useColorModeValue('dashboardBG', 'navy.800')
  let sidebarMargins = '0px'

  // SIDEBAR
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      position='fixed'
      minH='100%'
      zIndex={999}
    >
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w='300px'
        h='100vh'
        m={sidebarMargins}
        minH='100%'
        overflowX='hidden'
        // boxShadow={shadow}
      >
        <Content routes={routes} />
      </Box>
    </Box>
  )
}

// FUNCTIONS for sidebar responsive
export function SidebarResponsive(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  // eslint-disable-next-line react/prop-types
  const { routes } = props

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems='center'>
      <Flex ref={btnRef} w='max-content' h='max-content' onClick={onOpen}>
        <Icon
          width={`2rem`}
          height={`2rem`}
          as={IoMenuOutline}
          color={`white`}
          my='auto'
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={'left'}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w='285px' maxW='285px' bg={`white`}>
          <DrawerCloseButton
            color={`white`}
            zIndex='3'
            onClose={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody bgColor={`dashboardBG`} maxW='285px' px='0rem' pb='0'>
            <Content routes={routes} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
// PROPS

// Sidebar.propTypes = {
//   logoText: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
//   variant: PropTypes.string,
// }

export default Sidebar
