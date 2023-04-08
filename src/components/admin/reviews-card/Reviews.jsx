/* eslint-disable react/prop-types */
import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import StarRatings from 'react-star-ratings'

const Reviews = ({ review }) => {
  return (
    <Box>
      <Flex justifyContent={`space-between`} alignItems={`center`}>
        <Text fontSize={`lg`}>{review?.name}</Text>
        <Text fontSize={`sm`} color={`textGrey`}>
          5 mins ago
        </Text>
      </Flex>
      <Box>{/* <StarRatings starDimension='20px' starSpacing='1px' /> */}</Box>
      <Box mt={5}>
        <Text fontSize={`sm`} color={`textGrey`}>
          {review?.review}
        </Text>
        <Divider color={`textGrey`} my={3} />
      </Box>
    </Box>
  )
}

export default Reviews
