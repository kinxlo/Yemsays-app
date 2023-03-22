import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import { MdLocationOn, MdOutlineFamilyRestroom } from 'react-icons/md'
import LinkButton from '../../buttons/link-button/LinkButton'
import Tag from '../../tag/Tag'

// eslint-disable-next-line react/prop-types
const AdminPropertyCard = ({ listed, sold }) => {
  return (
    <Card
      bgColor={`transparent`}
      color={`textGrey`}
      // maxW={`529px`}
    >
      <CardBody p={0} display={`flex`} flexDir={`column`} gap={5}>
        <Box
          _after={{
            display: sold ? `block` : `none`,
            content: `"SOLD"`,
            fontSize: `6rem`,
            pos: `absolute`,
            fontWeight: 800,
            color: `#80000060`,
            top: 50,
            left: 50,
            transform: `translate(0, 20%) rotate(-50deg)`,
          }}
          height={`277px`}
        >
          <Image
            height={`100%`}
            objectFit={`cover`}
            borderRadius={10}
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='img'
          />
        </Box>
        <Stack spacing='3' flex={1}>
          <Box height={`1.5rem`}>
            <Text color={`lightgreen`} display={listed ? `block` : `none`}>
              Posted on 1/3/2023
            </Text>
          </Box>
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
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923020/project-yemsays/Vector_pgjluh.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  3 Bedroom
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923106/project-yemsays/Vector_1_tittna.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  2 Bathroom
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923199/project-yemsays/Group_33_q7dpvf.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  Garage
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923214/project-yemsays/Rectangle_13_v9y4bt.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  3 Square Feet
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Stack>
            <Box display={sold ? `none` : null} paddingTop={4}>
              <LinkButton
                to={`/admin/properties/${1}/details`}
                text={`View Details`}
                width={`100%`}
                height={`32px`}
              />
            </Box>
            <Box paddingTop={4}>
              <Button
                display={!sold ? `none` : null}
                variant={`outline`}
                colorScheme={`orange`}
                w={`100%`}
                h={`48px`}
              >
                Recover As Unsold
              </Button>
            </Box>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default AdminPropertyCard
