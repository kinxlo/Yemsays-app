import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
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
      <Flex
        p={7}
        alignItems={`center`}
        justifyContent={{ base: `space-between`, xl: `flex-end` }}
        flexDir={{ base: `row-reverse`, xl: `row` }}
      >
        <Flex alignItems={`center`} gap={{ base: 20, lg: 30 }}>
          <Box>
            <Flex>
              <Flex
                flexDir={{ sm: `row` }}
                gap='4'
                alignItems='center'
                // justifyContent={`center`}
                flexWrap='wrap'
              >
                <Box>
                  <Heading size='sm'>Ezra Aduramiba</Heading>
                  <Text textAlign={`right`} color={`textGrey`}>
                    Admin
                  </Text>
                </Box>
                <Menu>
                  <MenuButton as={Box}>
                    <Avatar
                      borderRadius={5}
                      name='Ezra Aduramiba'
                      // src='https://bit.ly/sage-adebayo'
                    />
                  </MenuButton>
                  <MenuList
                    // borderColor={`primary`}
                    bgColor={`white`}
                    color={`primary`}
                  >
                    <MenuItem
                      onClick={handleLogout}
                      bgColor={`transparent`}
                      color={`red`}
                      display={`flex`}
                      alignItems={`center`}
                      gap={3}
                    >
                      <Box>
                        <Icon icon={`ri:logout-circle-line`} width={`1.3rem`} />
                      </Box>
                      <Text fontWeight={`bold`} mt={1}>
                        Log out
                      </Text>
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
