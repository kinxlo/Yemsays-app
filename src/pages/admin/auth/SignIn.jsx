import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import AdminAuthPageLayout from '../../../layout/AdminAuthPageLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from './api/authApiSlice'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

const validation = {
  required: 'This input is required.',
  // pattern: {
  //   value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  //   message: 'Invalid Email Address',
  // },
}

const SignUp = () => {
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [login, { isLoading }] = useLoginMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const navigate = useNavigate()

  const handleClick = () => setShow(!show)
  const onSubmit = async (data) => {
    console.log(data)

    try {
      const res = await login(data).unwrap()
      res.success ? navigate(`/admin/dashboard`) : null
    } catch (err) {
      toast({
        description: `${err.data.message}`,
        status: 'error',
        variant: 'left-accent',
        position: 'top',
        duration: 5000,
        isClosable: false,
      })
    }
  }

  return (
    <AdminAuthPageLayout>
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        as={`form`}
        display={`flex`}
        flexDir={`column`}
        gap={10}
      >
        <Box>
          <FormLabel fontSize={`xl`}>Email</FormLabel>
          <Input
            id='email'
            py={7}
            borderRadius={7}
            borderColor={`textGrey`}
            type='email'
            placeholder='hello@example.com'
            _placeholder={{ fontSize: `xl` }}
            {...register('email', validation)}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => (
              <Text fontSize={`xs`} mt={2} color={`red`}>
                {message}
              </Text>
            )}
          />
        </Box>
        <Box>
          <FormLabel fontSize={`xl`}>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              id='password'
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={show ? 'text' : 'password'}
              {...register('password', validation)}
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
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => (
              <Text fontSize={`xs`} mt={2} color={`red`}>
                {message}
              </Text>
            )}
          />
        </Box>
        <Flex alignItems={`center`} justifyContent={`space-between`} py={3}>
          <Checkbox size={`lg`}>
            <Text mb={-2} color={`white`}>
              Remember me
            </Text>
          </Checkbox>
          <Text color={`red`} mb={-2}>
            <Link>Forgot Password</Link>
          </Text>
        </Flex>
        <Box>
          <Button
            type='submit'
            isLoading={isLoading}
            loadingText='Signing in...'
            w={`100%`}
            bgColor={`primary`}
            color={`white`}
            size={`lg`}
            py={7}
          >
            Sign In
          </Button>
        </Box>
        <Text
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          gap={2}
          p={2}
        >
          New User?
          <Text color={`primary`} as={`span`}>
            <Link to={`/admin/signup`}>Sign up</Link>
          </Text>
        </Text>
      </FormControl>
    </AdminAuthPageLayout>
  )
}

export default SignUp
