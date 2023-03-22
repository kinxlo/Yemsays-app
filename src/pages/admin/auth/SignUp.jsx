import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react'
import AdminAuthPageLayout from '../../../layout/AdminAuthPageLayout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const baseUrl = import.meta.env.VITE_BASE_URL

const SignUp = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const { handleSubmit, register } = useForm()

  const handleSubmitForm = async (data) => {
    console.log(data)
    const res = await axios.post(`${baseUrl}/auth/signup`, data)
    console.log(res)
  }

  return (
    <AdminAuthPageLayout>
      <FormControl
        onSubmit={handleSubmit(handleSubmitForm)}
        as={`form`}
        display={`flex`}
        flexDir={`column`}
        gap={10}
      >
        <Box>
          <FormLabel fontSize={`xl`}>Email</FormLabel>
          <Input
            py={7}
            borderRadius={7}
            borderColor={`textGrey`}
            type='email'
            placeholder='hello@example.com'
            _placeholder={{ fontSize: `xl` }}
            {...register(`email`)}
          />
        </Box>
        <Box>
          <FormLabel fontSize={`xl`}>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={show ? 'text' : 'password'}
              {...register(`password`)}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleClick}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon icon={!show ? `mdi:eye-outline` : `mdi:eye-off-outline`} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <FormLabel fontSize={`xl`}>Confirm Password</FormLabel>
          <InputGroup size='md'>
            <Input
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={show ? 'text' : 'password'}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleClick}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon icon={!show ? `mdi:eye-outline` : `mdi:eye-off-outline`} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Button
            type='submit'
            w={`100%`}
            bgColor={`primary`}
            color={`white`}
            size={`lg`}
            py={7}
          >
            Sign Up
          </Button>
        </Box>
        <Text
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          gap={2}
          p={2}
        >
          Already A User?
          <Text color={`primary`} as={`span`}>
            <Link to={`/admin/signin`}>Sign in</Link>
          </Text>
        </Text>
      </FormControl>
    </AdminAuthPageLayout>
  )
}

export default SignUp
