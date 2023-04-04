import {
  Box,
  Button,
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
import { useForm } from 'react-hook-form'
import { useSignupMutation } from './api/authApiSlice'
import { ErrorMessage } from '@hookform/error-message'

const validation = {
  required: 'This input is required.',
  // pattern: {
  //   value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  //   message: 'Invalid Email Address',
  // },
}

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [showPassword, setPasswordShow] = React.useState({
    password: false,
    confirmPassword: false,
  })
  const [signup, { isLoading }] = useSignupMutation()
  const [errorMessage, setErrorMessage] = useState(null)
  const toast = useToast()
  const navigate = useNavigate()

  const validatePassword = (data) => {
    return data.password === data.confirmPassword
  }

  const handleShowPassword = () =>
    setPasswordShow((prevState) => {
      return { ...prevState, password: !prevState.password }
    })

  const handleShowConfirmPassword = () =>
    setPasswordShow((prevState) => {
      return { ...prevState, confirmPassword: !prevState.confirmPassword }
    })

  const onSubmit = async (data) => {
    console.log(data)
    if (validatePassword(data)) {
      try {
        const res = await signup(data).unwrap()
        console.log(res)
        res.success ? navigate(`/admin/signin`) : null
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
    } else {
      toast({
        description: `Password and confirm password are not the same`,
        status: 'warning',
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
            id={`email`}
            py={7}
            borderRadius={7}
            borderColor={`textGrey`}
            type='email'
            placeholder='hello@example.com'
            _placeholder={{ fontSize: `xl` }}
            {...register(`email`, validation)}
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
              id={`password`}
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={showPassword.password ? 'text' : 'password'}
              {...register(`password`, validation)}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleShowPassword}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon
                icon={
                  !showPassword.password
                    ? `mdi:eye-outline`
                    : `mdi:eye-off-outline`
                }
              />
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
        <Box>
          <FormLabel fontSize={`xl`}>Confirm Password</FormLabel>
          <InputGroup size='md'>
            <Input
              py={7}
              id={`confirmPassword`}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={showPassword.confirmPassword ? 'text' : 'password'}
              {...register(`confirmPassword`, validation)}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleShowConfirmPassword}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon
                icon={
                  !showPassword.confirmPassword
                    ? `mdi:eye-outline`
                    : `mdi:eye-off-outline`
                }
              />
            </InputRightElement>
          </InputGroup>
          <ErrorMessage
            errors={errors}
            name='confirmPassword'
            render={({ message }) => (
              <Text fontSize={`xs`} mt={2} color={`red`}>
                {message}
              </Text>
            )}
          />
        </Box>
        <Box>
          <Button
            type='submit'
            isLoading={isLoading}
            loadingText='Signing up...'
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
