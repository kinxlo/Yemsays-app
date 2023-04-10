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
          {new Date(review?.createdAt).toLocaleString()}
        </Text>
      </Flex>
      <Box>
        <StarRatings
          starRatedColor='orange'
          starDimension='20px'
          starSpacing='1px'
          rating={review?.score}
        />
      </Box>
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
