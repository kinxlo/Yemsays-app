/* eslint-disable react/prop-types */
import React from 'react'

const Spinner = ({ size }) => {
  return (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='orange.500'
      size={size}
    />
  )
}

export default Spinner
