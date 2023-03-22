// chakra imports
import { Box, Flex, Text } from '@chakra-ui/react'
//   Custom components
import Brand from './Brand'
import Links from './Links'
import React from 'react'

// FUNCTIONS

function SidebarContent(props) {
  // eslint-disable-next-line react/prop-types
  const { routes } = props
  // SIDEBAR
  return (
    <Flex color={`white`} direction='column' height='100%' pt='25px'>
      <Brand />
      <Flex
        flexDir={`column`}
        justifyContent={`center`}
        gap={10}
        height={`100%`}
        width={`100%`}
      >
        <Links routes={routes} />
      </Flex>
      <Box color='textGrey' textAlign={`center`} p={3}>
        <Text>Copyright&copy;2023 Yemsays</Text>
      </Box>
    </Flex>
  )
}

export default SidebarContent
