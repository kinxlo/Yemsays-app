/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import SpinnerComponent from '../../feedback/SpinnerComponent'

const StatCard = ({ total, title, isLoading }) => {
  console.log(isLoading)
  return (
    <Card borderRadius={10} bgColor={`transparent`} overflow={`hidden`}>
      <CardBody
        color={`textLight`}
        bgColor={`dashboardBG`}
        display={`flex`}
        gap={10}
      >
        {isLoading ? (
          <SpinnerComponent size={`xl`} />
        ) : (
          <>
            <Flex flex={1} flexDir={`column`} justifyContent={`space-between`}>
              <Text>{title}</Text>
              <Heading fontSize={`5xl`}>{total}</Heading>
            </Flex>
            <Box flex={1}>
              <Image
                className='cc-img-fluid'
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678318984/project-yemsays/Group_157_fupa9j.png`}
              />
            </Box>
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default StatCard
