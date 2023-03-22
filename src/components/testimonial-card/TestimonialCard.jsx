import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const TestimonialCard = () => {
  return (
    <Card bgColor={`grey`} borderRadius={`28px`}>
      <CardBody p={10}>
        <Box>
          <Image
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677925003/project-yemsays/Group_55_ivbgcb.png`}
          />
        </Box>
        <Text color={`GrayText`} fontSize={`md`} my={39}>
          Lörem ipsum Koning buvis ode, när dejelog nidoen dende plus ska, vka
          Din hybrde häfid. Prde sm, vis ode, när dejelog sm, lovien.
        </Text>
        <Box>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar
              borderRadius={5}
              name='Ellandro Johansson'
              src='https://bit.ly/sage-adebayo'
            />

            <Box>
              <Heading size='sm' color={`white`}>
                Ellen Johansson
              </Heading>
              <Text color={`GrayText`}>Happy Customer</Text>
            </Box>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  )
}

export default TestimonialCard
