/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const LinkButton = ({ width, height, to, text }) => {
  return (
    <Link
      to={to}
      as={ReactLink}
      width={width}
      // height={height}
      bg='primary'
      py={3}
      color='white'
      borderRadius={`8px`}
      _hover={{ bg: `rgba(247, 130, 20, 0.808)` }}
    >
      {text}
    </Link>
  )
}

export default LinkButton
