import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { MdLocationOn } from 'react-icons/md'

const SimilarPropertyCard = () => {
  return (
    <Card
      bgColor={`transparent`}
      border={`1px solid #343434`}
      borderRadius={7}
      color={`white`}
    >
      <CardBody
        display={`flex`}
        flexDir={{ base: `column`, xl: `row` }}
        gap={3}
      >
        <Box w={`35%`}>
          <Image
            w={`100%`}
            height={`100%`}
            objectFit={`cover`}
            borderRadius={7}
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
          />
        </Box>
        <Stack flex={2}>
          <Heading fontSize={`md`}>Prime Commercial Land</Heading>
          <Box
            color='blue.600'
            fontSize='md'
            display={`flex`}
            alignItems={`start`}
            gap={2}
          >
            <Box>
              <MdLocationOn size={`16px`} color={`grey`} />
            </Box>
            <Text fontSize={`sm`} color={`GrayText`}>
              3, Ogunlesi Street, Lagos 100252
            </Text>
          </Box>
          <Text fontSize={`3xl`} fontWeight={`bold`} color={`#0FB7C1`}>
            $29,630
          </Text>
          <Button variant='outline' colorScheme={`orange`}>
            View Details
          </Button>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SimilarPropertyCard
