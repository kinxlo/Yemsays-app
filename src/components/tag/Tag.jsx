import { Box, Card, Flex, Text } from '@chakra-ui/react'
import React from 'react'

// eslint-disable-next-line react/prop-types
const Tag = ({ bgColor, color, text, children, fs }) => {
  return (
    <Card
      bgColor={bgColor}
      color={color}
      width={`fit-content`}
      py={1}
      px={3}
      display={`flex`}
      flexDir={`row`}
      alignItems={`bottom`}
      justifyContent={`end`}
    >
      <Flex gap={2} mt={1}>
        <Box width={`fit-content`}>{children}</Box>
        <Text width={`fit-content`} fontSize={fs || `sm`}>
          {text}
        </Text>
      </Flex>
    </Card>
  )
}

export default Tag
