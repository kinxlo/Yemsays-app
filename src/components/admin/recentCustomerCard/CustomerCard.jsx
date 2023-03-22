import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CustomerCard = () => {
  return (
    <Flex flexDir={`row`} justifyContent={`space-between`}>
      <Box>
        <Flex>
          <Flex flex='1' gap='4' alignItems='flex-start' flexWrap='wrap'>
            <Avatar
              borderRadius={5}
              width={`139px`}
              height={`105px`}
              name='Segun Adebayo'
              src='https://bit.ly/sage-adebayo'
            />
            <Flex flexDir={`column`} justifyContent={`space-around`} h={`100%`}>
              <Text color={`primary`}>#0030</Text>
              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text mt={1} fontSize={`sm`} color={`textGrey`}>
                  Phone: 08130054558
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Flex flexDir={`column`} justifyContent={`space-around`} h={`100%`}>
          <Text color={`textGrey`}>Location</Text>
          <Box>
            <Heading size='sm'>Surulere</Heading>
            <Text mt={1} fontSize={`sm`} color={`textGrey`}>
              LGA
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex flexDir={`column`} justifyContent={`space-around`} h={`100%`}>
          <Text color={`textGrey`}>Registration</Text>
          <Box>
            <Text fontSize={`sm`} color={`textGrey`}>
              Registration Date: 26/2/2023
            </Text>
            <Text mt={1} fontSize={`sm`} color={`textGrey`}>
              Registration Time: 2:30pm
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default CustomerCard
