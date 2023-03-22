import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const SalesPersonCard = () => {
  return (
    <Card
      bgColor={`transparent`}
      color={`white`}
      border={`1px solid #343434`}
      borderRadius={7}
      mb={10}
    >
      <CardBody p={10}>
        <Flex
          flexDir={`column`}
          flex='1'
          gap='4'
          alignItems='center'
          flexWrap='wrap'
        >
          <Avatar
            name='Segun Adebayo'
            src='https://bit.ly/sage-adebayo'
            size={`2xl`}
          />

          <Box textAlign={`center`}>
            <Heading fontSize={`2xl`}>Segun Adebayo</Heading>
            <Text fontSize={`lg`} color={`textGrey`}>
              Sales Support
            </Text>
          </Box>
        </Flex>
        <Flex flexDir={`column`} gap={5} mt={20}>
          <Button size={`lg`} bgColor={`white`} color={`black`}>
            Message
          </Button>
          <Button size={`lg`} bgColor={`#F5D9BE`} color={`primary`}>
            Call
          </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SalesPersonCard
