/* eslint-disable react/prop-types */
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
import { Link } from 'react-router-dom'

const SimilarPropertyCard = ({ property }) => {
  return (
    <Card
      bgColor={`transparent`}
      border={`1px solid #343434`}
      borderRadius={7}
      color={`white`}
    >
      <CardBody
        // border={`1px solid red`}
        display={`flex`}
        flexDir={{ base: `column`, sm: `row` }}
        gap={3}
      >
        <Box height={`12rem`} w={{ md: `50%` }}>
          <Image
            w={`100%`}
            height={`100%`}
            objectFit={`cover`}
            borderRadius={7}
            src={property?.media?.imgs?.[0]}
            alt='Green double couch with wooden legs'
          />
        </Box>
        <Stack justifyContent={`space-between`} w={{ md: `50%` }}>
          <Heading fontSize={`md`}>{property?.title}</Heading>
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
              {property?.location}
            </Text>
          </Box>
          <Text fontSize={`3xl`} fontWeight={`bold`} color={`#0FB7C1`}>
            ${property?.price}
          </Text>
          <Link to={`/properties/${property?._id}/details`}>
            <Button w={`100%`} variant='outline' colorScheme={`orange`}>
              View Details
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SimilarPropertyCard
