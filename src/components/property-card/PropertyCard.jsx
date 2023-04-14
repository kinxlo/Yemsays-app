/* eslint-disable react/prop-types */
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
import { MdLocationOn } from 'react-icons/md'
import Tag from '../tag/Tag'
import LinkButton from '../buttons/link-button/LinkButton'
import useFormatCurrency from '../../hooks/useFormatCurrency'

const PropertyCard = ({ featuredProperty }) => {
  const { formattedCurrency } = useFormatCurrency(featuredProperty)
  return (
    <Card w={`100%`} hidden={!featuredProperty} borderRadius={`30px`}>
      <CardBody
        display={`flex`}
        flexDir={{ base: `column`, md: `row` }}
        gap={5}
      >
        <Box width={{ md: `50%` }} height={`340px`}>
          <Image
            w={`100%`}
            height={`100%`}
            objectFit={`cover`}
            borderRadius={`30px`}
            border={`1px solid lightGrey`}
            src={featuredProperty?.image || featuredProperty?.media?.imgs[0]}
            alt='Green double couch with wooden legs'
          />
        </Box>
        <Stack
          justifyContent={`space-between`}
          width={{ md: `50%` }}
          spacing='3'
        >
          <Box display={`flex`} gap={5} mb={3}>
            <Tag
              bgColor={`accentBlue`}
              color={`primary`}
              text={featuredProperty?.tags[0]}
            >
              {/* <FaNetworkWired /> */}
            </Tag>
            <Tag
              bgColor={`accentRed`}
              color={`red`}
              text={featuredProperty?.tags[1]}
            >
              {/* <MdOutlineFamilyRestroom /> */}
            </Tag>
          </Box>
          <Heading fontSize={`xl`}>{featuredProperty?.title}</Heading>
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
              {featuredProperty?.location}
            </Text>
          </Box>
          <Text fontSize={`3xl`} fontWeight={`bold`} color={`#0FB7C1`}>
            {formattedCurrency}
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
                  {featuredProperty?.features?.[0]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923106/project-yemsays/Vector_1_tittna.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  {featuredProperty?.features?.[1]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923199/project-yemsays/Group_33_q7dpvf.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  {featuredProperty?.features?.[2]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923214/project-yemsays/Rectangle_13_v9y4bt.png`}
                />
                <Text mt={1} fontSize={`sm`}>
                  {featuredProperty?.features?.[3]}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box paddingTop={4}>
            <LinkButton
              to={`/properties/${featuredProperty?.id}/details`}
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
