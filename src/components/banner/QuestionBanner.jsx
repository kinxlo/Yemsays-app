import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const QuestionBanner = () => {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()

  const sendEmail = (data) => {
    console.log(data)
    navigate(`/contact`, { state: { data } })
  }

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
          as={`form`}
          onSubmit={handleSubmit(sendEmail)}
          display={`flex`}
          flexDir={{ base: `column`, md: `row` }}
          alignItems={`center`}
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
            {...register('email')}
          />
          <Button
            type='submit'
            bgColor={`primary`}
            w={{ base: `100%`, md: `153px` }}
          >
            Continue
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default QuestionBanner
