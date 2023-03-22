import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { MdLocationOn, MdOutlineFamilyRestroom } from 'react-icons/md'
import { FaNetworkWired } from 'react-icons/fa'
import Tag from '../tag/Tag'
import LinkButton from '../buttons/link-button/LinkButton'

const PropertyCard = () => {
  return (
    <Card maxW={`529px`} borderRadius={`30px`}>
      <CardBody
        display={`flex`}
        flexDir={{ base: `column`, xl: `row` }}
        gap={5}
      >
        <Box height={{ base: `20rem`, md: `100%` }} flex={{ lg: 1 }}>
          <Image
            height={`100%`}
            objectFit={`cover`}
            borderRadius={`30px`}
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
          />
        </Box>
        <Stack spacing='3' flex={1}>
          <Box display={`flex`} gap={5} mb={3}>
            <Tag bgColor={`accentBlue`} color={`primary`} text={`Network`}>
              <FaNetworkWired />
            </Tag>
            <Tag bgColor={`accentRed`} color={`red`} text={`Family`}>
              <MdOutlineFamilyRestroom />
            </Tag>
          </Box>
          <Heading fontSize={`xl`}>Prime Commercial Land</Heading>
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
          <Box>
            <SimpleGrid columns={2} gap={2}>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Box boxSize={`1rem`}>
                  <Image
                    objectFit={`contain`}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923020/project-yemsays/Vector_pgjluh.png`}
                  />
                </Box>
                <Text mt={1} fontSize={`sm`}>
                  3 Bedroom
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923106/project-yemsays/Vector_1_tittna.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  2 Bathroom
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923199/project-yemsays/Group_33_q7dpvf.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  Garage
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923214/project-yemsays/Rectangle_13_v9y4bt.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  3 Square Feet
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box paddingTop={4}>
            <LinkButton
              to={`/properties/${1}/details`}
              text={`View Details`}
              width={`128px`}
              height={`32px`}
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PropertyCard
