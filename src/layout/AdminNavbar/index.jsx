import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SidebarResponsive } from '../../components/sidebar/Sidebar'
import routes from '../../routes'

const AdminNavbar = (props) => {
  const { ...rest } = props
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch({ type: `auth/logout` })
  }

  return (
    <nav>
      <Flex p={7} alignItems={`center`} justifyContent={`flex-end`}>
        <Flex alignItems={`center`} gap={{ base: 20, lg: 30 }}>
          <Box>
            <Flex>
              <Flex
                flexDir={{ base: `column-reverse`, sm: `row` }}
                gap='4'
                alignItems='center'
                flexWrap='wrap'
              >
                <Box>
                  <Heading size='sm'>Segun Adebayo</Heading>
                  <Text textAlign={`right`} color={`textGrey`}>
                    Admin
                  </Text>
                </Box>
                <Menu>
                  <MenuButton as={Box}>
                    <Avatar
                      borderRadius={5}
                      name='Segun Adebayo'
                      src='https://bit.ly/sage-adebayo'
                    />
                  </MenuButton>
                  <MenuList
                    borderColor={`primary`}
                    bgColor={`bgBlack`}
                    color={`primary`}
                  >
                    <MenuItem onClick={handleLogout} bgColor={`transparent`}>
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <SidebarResponsive routes={routes} {...rest} />
      </Flex>
    </nav>
  )
}

export default AdminNavbar
