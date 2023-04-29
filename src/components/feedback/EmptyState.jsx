/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
// import emptyImg from '../../assets/Empty-pana.png'

const EmptyState = ({ img, size, message, children }) => {
  return (
    <Center
      flexDir={`column`}
      textAlign={`center`}
      width={`100%`}
      h={`100%`}
      p={10}
      gap={1}
    >
      <Image w={size} src={img} />
      <Text color={`primary`}>{message}</Text>
      {children}
    </Center>
  )
}

export default EmptyState
