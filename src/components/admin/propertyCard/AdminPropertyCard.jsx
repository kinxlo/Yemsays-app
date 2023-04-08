/* eslint-disable react/prop-types */
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
import React, { useState } from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import { MdLocationOn, MdOutlineFamilyRestroom } from 'react-icons/md'
import LinkButton from '../../buttons/link-button/LinkButton'
import FeedbackModal from '../../modals/Modal'
import Tag from '../../tag/Tag'

const AdminPropertyCard = ({ listed, sold, propertyDescription }) => {
  const [action, setAction] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  // const { features, location, id, media, price, status, tags, title, type } =
  //   propertyDescription
  const handleOpen = (action) => {
    setAction(action)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

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
            width={`100%`}
            height={`100%`}
            objectFit={`cover`}
            borderRadius={10}
            src={propertyDescription?.image}
            alt='img'
          />
        </Box>
        <Stack spacing={3} flex={1}>
          <Box height={`1.5rem`}>
            <Text color={`lightgreen`} display={listed ? `block` : `none`}>
              {/* Posted on 1/3/2023 */}
              {propertyDescription?.createdAt}
            </Text>
          </Box>
          <Box display={`flex`} gap={5} mb={3}>
            <Tag
              bgColor={`accentBlue`}
              color={`primary`}
              text={propertyDescription?.tags[0]}
            >
              <FaNetworkWired />
            </Tag>
            <Tag
              bgColor={`accentRed`}
              color={`red`}
              text={propertyDescription?.tags[1]}
            >
              <MdOutlineFamilyRestroom />
            </Tag>
          </Box>
          <Heading fontSize={`xl`}>{propertyDescription?.title}</Heading>
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
              {propertyDescription?.location}
            </Text>
          </Box>
          <Text fontSize={`3xl`} fontWeight={`bold`} color={`#0FB7C1`}>
            ${propertyDescription?.price}
          </Text>
          <Box>
            <SimpleGrid columns={2} gap={2}>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923020/project-yemsays/Vector_pgjluh.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  {propertyDescription?.features[1]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923106/project-yemsays/Vector_1_tittna.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  {propertyDescription?.features[2]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923199/project-yemsays/Group_33_q7dpvf.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  {propertyDescription?.features[3]}
                </Text>
              </Box>
              <Box display={`flex`} alignItems={`center`} gap={2}>
                <Image
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677923214/project-yemsays/Rectangle_13_v9y4bt.png`}
                />
                <Text fontSize={`sm`} verticalAlign={`text-bottom`}>
                  {propertyDescription?.features[4]}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Stack>
            <Box display={sold ? `none` : null} paddingTop={4}>
              <LinkButton
                to={`/admin/properties/${propertyDescription?.id}/details`}
                text={`View Details`}
                width={`100%`}
                height={`32px`}
              />
            </Box>
            <Box paddingTop={4}>
              <FeedbackModal
                id={propertyDescription?.id}
                action={action}
                onClose={handleClose}
                isOpen={isOpen}
              />
              <Button
                onClick={() => handleOpen(`listed`)}
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
