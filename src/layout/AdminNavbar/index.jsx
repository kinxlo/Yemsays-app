import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React from 'react'
import { SidebarResponsive } from '../../components/sidebar/Sidebar'
import routes from '../../routes'

const AdminNavbar = (props) => {
  const { ...rest } = props
  return (
    <nav>
      <Flex p={7} alignItems={`center`} justifyContent={`space-between`}>
        <Box display={{ base: `none`, lg: `initial` }}>
          <InputGroup width={`25rem`} borderColor={`textGrey`} size={`lg`}>
            <Input borderRadius={`100px`} placeholder='Enter amount' />
            <InputRightElement color={`primary`}>
              <Icon width={`20px`} height={`20px`} icon='ri:search-line' />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex alignItems={`center`} gap={{ base: 20, lg: 30 }}>
          <Box borderRadius={3} p={2} bgColor={`#292929`} color={`primary`}>
            <Icon width={`1.5rem`} icon='basil:notification-outline' />
          </Box>
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
                <Avatar
                  borderRadius={5}
                  name='Segun Adebayo'
                  src='https://bit.ly/sage-adebayo'
                />
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
