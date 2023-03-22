import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import StarRatings from 'react-star-ratings'

const Reviews = () => {
  return (
    <Box>
      <Flex justifyContent={`space-between`} alignItems={`center`}>
        <Text fontSize={`lg`}>James Ibori</Text>
        <Text fontSize={`sm`} color={`textGrey`}>
          5 mins ago
        </Text>
      </Flex>
      <Box>
        <StarRatings starDimension='20px' starSpacing='1px' />
      </Box>
      <Box mt={5}>
        <Text fontSize={`sm`} color={`textGrey`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum veniam
          nihil enim quae ducimus fugit iste quaerat odio quo iure debitis
          excepturi cumque facilis quas doloribus necessitatibus, nulla ipsum
          sapiente!
        </Text>
        <Divider color={`textGrey`} my={3} />
      </Box>
    </Box>
  )
}

export default Reviews
