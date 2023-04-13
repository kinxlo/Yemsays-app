/* eslint-disable react/prop-types */
import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const SpinnerComponent = ({ size }) => {
  return (
    <Center width={`100%`} h={`100%`} p={10}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='orange.500'
        size={size}
      />
    </Center>
  )
}

export default SpinnerComponent
