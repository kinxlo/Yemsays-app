import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminAuthPageLayout from '../../../layout/AdminAuthPageLayout'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useVerifyEmailMutation } from './api/authApiSlice'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

const validation = {
  required: 'This input is required.',
  // pattern: {
  //   value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  //   message: 'Invalid Email Address',
  // },
}

const ForgotPasswordEmailVerification = () => {
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const navigate = useNavigate()

  //   const handleClick = () => setShow(!show)
  const onSubmit = async (data) => {
    console.log(data)

    try {
      const res = await verifyEmail(data).unwrap()
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
        // navigate(`/forgot-password/${res.message}`)
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

  return (
    <AdminAuthPageLayout heading={`Forgot Password Email Verification`}>
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
            Send Verification
          </Button>
        </Box>
      </FormControl>
    </AdminAuthPageLayout>
  )
}

export default ForgotPasswordEmailVerification
