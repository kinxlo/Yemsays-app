/* eslint-disable react/prop-types */
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
import SpinnerComponent from '../feedback/SpinnerComponent'

const SalesPersonCard = ({ salePerson, isLoading }) => {
  const base64String = salePerson?.avatar
  const phoneNumber = salePerson?.phoneNumber // Replace with the phone number you want to call
  const message = 'Hello!' // Replace with the message you want to send
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` // Create the WhatsApp message link
  const call_url = `tel:${phoneNumber}`

  function callViaWhatsapp() {
    window.location.href = url // Redirect the user to the WhatsApp call link
  }
  function callViaPhone() {
    window.location.href = call_url // Redirect the user to the WhatsApp call link
  }

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
          {isLoading ? (
            <SpinnerComponent size={`xl`} />
          ) : (
            <Avatar
              name={salePerson?.name}
              src={`data:image/png;base64,${base64String}`}
              size={`2xl`}
            />
          )}

          <Box textAlign={`center`}>
            <Heading fontSize={`2xl`}>{salePerson?.name}</Heading>
            <Text fontSize={`lg`} color={`textGrey`}>
              Sales Support
            </Text>
          </Box>
        </Flex>
        <Flex flexDir={`column`} gap={5} mt={20}>
          <Button
            onClick={callViaWhatsapp}
            size={`lg`}
            bgColor={`white`}
            color={`black`}
          >
            Message
          </Button>
          <Button
            onClick={callViaPhone}
            size={`lg`}
            bgColor={`#F5D9BE`}
            color={`primary`}
          >
            Call
          </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SalesPersonCard
