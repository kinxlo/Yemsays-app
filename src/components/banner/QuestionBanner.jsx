import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const QuestionBanner = () => {
  return (
    <Box
      display={`flex`}
      flexDir={{ base: `column`, md: `row` }}
      bgColor={`primary`}
      borderRadius={`15px`}
      gap={5}
      p={{ base: `30px`, md: `50px 30px`, xl: `81px` }}
    >
      <Box flex={1}>
        <Heading fontSize={{ base: `2xl`, sm: `xl`, xl: `3xl` }}>
          Do you have any questions?
        </Heading>
        <Text>Enter your email address and get started</Text>
      </Box>
      <Box flex={1}>
        <FormControl
          display={`flex`}
          flexDir={{ base: `column`, md: `row` }}
          alignItems={`center`}
          // height={`66px`}
          bgColor={`white`}
          borderRadius={`lg`}
          px={3}
          py={3}
          gap={2}
        >
          <Input
            borderRadius={0}
            border={`none`}
            type='email'
            placeholder='Enter email address'
            color={`grey`}
          />
          <Button bgColor={`primary`} w={{ base: `100%`, md: `153px` }}>
            Continue
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default QuestionBanner
