import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  //   Text,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminAuthPageLayout from '../../../layout/AdminAuthPageLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { useChangePasswordMutation } from './api/authApiSlice'
import { useForm } from 'react-hook-form'
// import { ErrorMessage } from '@hookform/error-message'
import { Icon } from '@iconify/react'
import { ErrorMessage } from '@hookform/error-message'
// import axios from 'axios'

const validation = {
  required: 'Password input is required.',
  // pattern: {
  //   value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  //   message: 'Invalid Email Address',
  // },
}

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [ChangePassword, { isLoading }] = useChangePasswordMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const navigate = useNavigate()

  const handleClick1 = () => setShowOldPassword(!showOldPassword)
  const handleClick2 = () => setShowNewPassword(!showNewPassword)

  //   const { token } = useParams()
  //   const credentials = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       //   'Content-Type': 'multipart/form-data',
  //     },
  //   }

  const onSubmit = async (data) => {
    console.log(data)

    try {
      const res = await ChangePassword(data).unwrap()
      if (res.success) {
        toast({
          description: `${res.message}`,
          status: 'success',
          variant: 'left-accent',
          position: 'top',
          duration: 5000,
          isClosable: false,
        })
        // there should be a token here
        navigate(`/admin/signin`)
      }
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

  //   const onSubmit = async (data) => {
  //     console.log(data)
  //     // setLoading(true)

  //     try {
  //       const res = await axios.patch(
  //         `https://yemsay-v2.onrender.com/api/v1/auth/change-password`,
  //         data,
  //         credentials
  //       )
  //       console.log(res)

  //       // setLoading(false)
  //       if (res.success) {
  //         toast({
  //           description: `${res.message}`,
  //           status: 'success',
  //           variant: 'left-accent',
  //           position: 'top',
  //           duration: 5000,
  //           isClosable: false,
  //         })
  //         // there should be a token here
  //         navigate(`/admin/signin`)
  //       }
  //     } catch (err) {
  //       // setLoading(false)
  //       // setErrorMessage(err.response.data.message)
  //       toast({
  //         description: `${err.response.data.msg}`,
  //         status: 'error',
  //         variant: 'left-accent',
  //         position: 'top',
  //         duration: 5000,
  //         isClosable: false,
  //       })
  //     }
  //   }

  return (
    <AdminAuthPageLayout heading={`Set a New Password`}>
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        as={`form`}
        display={`flex`}
        flexDir={`column`}
        gap={10}
      >
        <Box>
          <FormLabel fontSize={`xl`}>Old Password</FormLabel>
          <InputGroup size='md'>
            <Input
              id='oldPassword'
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={showOldPassword ? 'text' : 'password'}
              {...register('oldPassword', validation)}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleClick1}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon
                icon={
                  !showOldPassword ? `mdi:eye-outline` : `mdi:eye-off-outline`
                }
              />
            </InputRightElement>
          </InputGroup>
          <ErrorMessage
            errors={errors}
            name='oldPassword'
            render={({ message }) => (
              <Text fontSize={`xs`} mt={2} color={`red`}>
                {message}
              </Text>
            )}
          />
        </Box>
        <Box>
          <FormLabel fontSize={`xl`}>New Password</FormLabel>
          <InputGroup size='md'>
            <Input
              id='newPassword'
              py={7}
              borderRadius={7}
              borderColor={`textGrey`}
              placeholder='..........'
              _placeholder={{ fontSize: `5xl` }}
              type={showNewPassword ? 'text' : 'password'}
              {...register('newPassword', validation)}
            />
            <InputRightElement
              h={`100%`}
              onClick={handleClick2}
              fontSize={`2rem`}
              mr={3}
            >
              <Icon
                icon={
                  !showNewPassword ? `mdi:eye-outline` : `mdi:eye-off-outline`
                }
              />
            </InputRightElement>
          </InputGroup>
          <ErrorMessage
            errors={errors}
            name='newPassword'
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
            loadingText='Sending...'
            w={`100%`}
            bgColor={`primary`}
            color={`white`}
            size={`lg`}
            py={7}
          >
            Reset Password
          </Button>
        </Box>
      </FormControl>
    </AdminAuthPageLayout>
  )
}

export default ChangePassword
