/* eslint-disable react/prop-types */
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const BreadCrumbHeader = ({ title, links }) => {
  const breadCrumbItems = links.map((link, index) => {
    return (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink as={ReactLink} to={link.ref}>
          {link.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    )
  })
  return (
    <Flex
      flexDir={{ base: `column-reverse`, lg: `row` }}
      alignItems={`center`}
      justifyContent={`space-between`}
      gap={5}
    >
      <Box>
        <Heading fontSize={`4xl`} fontWeight={300}>
          {title}
        </Heading>
      </Box>
      <Box>
        <Breadcrumb>{breadCrumbItems}</Breadcrumb>
      </Box>
    </Flex>
  )
}

export default BreadCrumbHeader
