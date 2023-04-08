import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import './scss/dashboard.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import { MdOutlineBed, MdOutlineFamilyRestroom } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { GiHomeGarage } from 'react-icons/gi'
import TwoColumnLayout from '../../../layout/TwoColumnLayout'
import Tag from '../../../components/tag/Tag'
import LinkButton from '../../../components/buttons/link-button/LinkButton'
import SalesPersonCard from '../../../components/saleperson-profile-card/SalesPersonCard'
import GridImageLayout from '../../../layout/GridImageLayout/GridImageLayout'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import {
  useGetPropertyByIDMutation,
  useListPropertyMutation,
} from './api/propertiesApiSlice'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPropertyDetails } from './api/propertiesSlice'
import ReactPlayer from 'react-player'
import SpinnerComponent from '../../../components/feedback/SpinnerComponent'
import FeedbackModal from '../../../components/modals/Modal'

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  const [action, setAction] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [getPropertyByID, { isLoading }] = useGetPropertyByIDMutation()
  const [listProperty] = useListPropertyMutation()
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[3]
  const propertiesDetails = useSelector(selectPropertyDetails)
  const links = [
    { name: `Home`, ref: `/admin/dashboard` },
    { name: `properties`, ref: `/admin/properties` },
    {
      name: `propertiesDetails`,
      ref: `/admin/properties/${propertyID}/Details`,
    },
  ]

  const handleOpen = (action) => {
    setAction(action)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const getPropertiesDetails = useCallback(async () => {
    await getPropertyByID(propertyID).unwrap()
  }, [getPropertyByID, propertyID])

  const setListedStatus = useCallback(
    async (status) => {
      const res = await listProperty({
        id: propertyID,
        body: { status: status },
      }).unwrap()
      if (res.success) {
        getPropertiesDetails()
      }
    },
    [getPropertiesDetails, listProperty, propertyID]
  )

  useEffect(() => {
    getPropertiesDetails()
  }, [getPropertiesDetails, setListedStatus])
  return (
    <>
      <FeedbackModal action={action} onClose={handleClose} isOpen={isOpen} />
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Properties Details`} links={links} />
      </Box>
      <Flex
        p={5}
        flexDir={{ base: `column`, sm: `row` }}
        justifyContent={`space-between`}
        alignItems={`center`}
        bgColor={`dashboardBG`}
        borderRadius={15}
        gap={5}
      >
        <Box>
          <Text fontSize={{ lg: `xl` }}>Residential Land</Text>
          <Text fontSize={{ lg: `xl` }} color={`textGrey`}>
            <Text color={`primary`} as={`span`}>
              {propertiesDetails?.status === `listed`
                ? `Listed Property`
                : `Unlisted Property`}{' '}
              /
            </Text>{' '}
            {propertiesDetails?.title}
          </Text>
        </Box>
        <Flex gap={5}>
          <LinkButton
            to={`/admin/properties/${propertyID}/details/edit`}
            text={`Edit`}
            height={`66px`}
            width={`115px`}
          />
          <Button
            onClick={() => handleOpen(`unlisted`)}
            borderRadius={10}
            p={6}
            variant={`outline`}
            colorScheme={`orange`}
            display={propertiesDetails?.status === `listed` ? `block` : `none`}
          >
            Unlist Property
          </Button>
          <Button
            // onClick={() => setListedStatus(`listed`)}
            onClick={() => handleOpen(`listed`)}
            display={
              propertiesDetails?.status === `unlisted` ? `block` : `none`
            }
            borderRadius={10}
            p={6}
            variant={`outline`}
            colorScheme={`orange`}
          >
            List Property
          </Button>
        </Flex>
      </Flex>
      <Box my={10}>
        <GridImageLayout
          isLoading={isLoading}
          isNotEditProperty
          imageSet={propertiesDetails?.media?.imgs}
        />
      </Box>
      {/* section two  with unique layer */}
      <Box>
        {/* section two  with unique layer */}
        <TwoColumnLayout>
          {/* grid one */}
          <GridItem colSpan={{ base: 2, lg: 8 }} color={`white`}>
            {/* tags */}
            <Flex gap={5}>
              <Tag
                bgColor={`accentBlue`}
                color={`primary`}
                text={propertiesDetails?.tags[0]}
              >
                <FaNetworkWired />
              </Tag>
              <Tag
                bgColor={`accentRed`}
                color={`red`}
                text={propertiesDetails?.tags[1]}
              >
                <MdOutlineFamilyRestroom />
              </Tag>
            </Flex>
            {/* title */}
            <Flex
              flexDir={{ base: `column`, lg: `row` }}
              justifyContent={`space-between`}
              alignItems={`flex-start`}
              my={5}
              gap={5}
            >
              <Box>
                <Heading fontSize={{ base: `3xl`, lg: `40px` }}>
                  {propertiesDetails?.title}
                </Heading>
                <Text color={`textGrey`} fontSize={`xl`}>
                  {propertiesDetails?.location}
                </Text>
              </Box>
              <Box>
                <Text color={`textGrey`}>Sales Price</Text>
                <Text fontSize={`4xl`} color={`#0FB7C1`} fontWeight={`bold`}>
                  ${propertiesDetails?.price}
                </Text>
              </Box>
            </Flex>
            {/* desc */}
            <Box border={`1px solid #343434`} p={8} borderRadius={7}>
              <Heading fontSize={`xl`} mb={5}>
                Description
              </Heading>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : (
                <Text color={`textGrey`}>{propertiesDetails?.description}</Text>
              )}
            </Box>
            {/* features */}
            <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
              <Heading fontSize={`xl`} mb={5}>
                Features
              </Heading>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : (
                <Flex
                  color={`textGrey`}
                  flexWrap={`wrap`}
                  justifyContent={`space-between`}
                  gap={3}
                >
                  <Tag
                    fs={`lg`}
                    text={propertiesDetails?.features[0]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertiesDetails?.features[1]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertiesDetails?.features[2]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertiesDetails?.features[3]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertiesDetails?.features[4]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <GiHomeGarage size={`1.5rem`} />
                  </Tag>
                  {/* <Tag
                  fs={`lg`}
                  text={propertiesDetails?.property?.features[5]}
                  bgColor={`transparent`}
                  color={`textGrey`}
                >
                  <MdCropSquare size={`1.5rem`} />
                </Tag>
                <Tag
                  fs={`lg`}
                  text={`Garage`}
                  bgColor={`transparent`}
                  color={`textGrey`}
                >
                  <GiHomeGarage size={`1.5rem`} />
                </Tag>
                <Tag
                  fs={`lg`}
                  text={propertiesDetails?.property?.features[6]}
                  bgColor={`transparent`}
                  color={`textGrey`}
                >
                  <MdCropSquare size={`1.5rem`} />
                </Tag> */}
                </Flex>
              )}
            </Box>
            {/* property video */}
            <Box
              className='propertyVideo'
              border={`1px solid #343434`}
              p={8}
              borderRadius={7}
              my={10}
            >
              <Heading fontSize={`xl`} mb={5}>
                Property Video
              </Heading>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : (
                <Box borderRadius={7} overflow={`hidden`}>
                  <ReactPlayer
                    width={`100%`}
                    controls
                    url={propertiesDetails?.media?.video}
                  />
                </Box>
              )}
            </Box>
          </GridItem>
          {/* grid two */}
          <GridItem colSpan={{ base: 2, lg: 4 }}>
            <Box>
              {/* sales person card */}
              <SalesPersonCard salePerson={propertiesDetails?.salesSupport} />
            </Box>
            {/* old properties action */}
            <Box>
              <Card
                bgColor={`transparent`}
                color={`white`}
                border={`1px solid #343434`}
                borderRadius={7}
                mb={10}
              >
                <CardBody p={10}>
                  <Flex>
                    <Text fontSize={`2xl`} textAlign={`center`}>
                      Old Property? Would you like to delete this property or
                      mark as sold?
                    </Text>
                  </Flex>
                  <Flex flexDir={`column`} gap={5} mt={10}>
                    <Button
                      onClick={() => handleOpen(`sold`)}
                      size={`lg`}
                      bgColor={`primary`}
                      color={`white`}
                    >
                      Mark as Sold
                    </Button>
                    <Button
                      variant={`outline`}
                      size={`lg`}
                      colorScheme={`orange`}
                    >
                      Delete Property
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
            </Box>
          </GridItem>
        </TwoColumnLayout>
      </Box>
    </>
  )
}

export default AdminPropertiesDetailsPage
