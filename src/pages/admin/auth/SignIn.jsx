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
} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react'
import AdminAuthPageLayout from '../../../layout/AdminAuthPageLayout'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <AdminAuthPageLayout>
      <FormControl display={`flex`} flexDir={`column`} gap={10}>
        <Box>
          <FormLabel fontSize={`xl`}>Email</FormLabel>
          <Input
            py={7}
            borderRadius={7}
            borderColor={`textGrey`}
            type='email'
            placeholder='hello@example.com'
            _placeholder={{ fontSize: `xl` }}
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
