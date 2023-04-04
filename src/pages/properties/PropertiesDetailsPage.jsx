import {
  Box,
  Button,
  Flex,
  FormControl,
  GridItem,
  Heading,
  Input,
  Progress,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import React, { useCallback, useEffect, useState } from 'react'
import { MdCropSquare, MdOutlineBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { GiHomeGarage } from 'react-icons/gi'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Tag from '../../components/tag/Tag'
import Container from '../../layout/Container'
import StarRatings from 'react-star-ratings'
import SalesPersonCard from '../../components/saleperson-profile-card/SalesPersonCard'
import SimilarPropertyCard from '../../components/property-card/SimilarPropertyCard'
import Banner from '../../components/banner/Banner'
import QuestionBanner from '../../components/banner/QuestionBanner'
import DefaultLayout from '../../layout/DefaultLayout'
import TwoColumnLayout from '../../layout/TwoColumnLayout'
import GridImageLayout from '../../layout/GridImageLayout/GridImageLayout'
import { useLocation } from 'react-router-dom'
import {
  useAddReviewMutation,
  useGetPropertyByIDClientMutation,
} from '../admin/dashboard/api/propertiesApiSlice'
import { useForm } from 'react-hook-form'

const PropertiesDetailsPage = () => {
  const [propertyDetails, setProppertyDetails] = useState({})
  const [videoFile, setVideoFile] = useState(null)
  const [reviewRatings, setReviewRatings] = useState({
    property: 0,
    valueForMoney: 0,
    location: 0,
    support: 0,
  })
  const [similarPropertyDetails, setSimilarProppertyDetails] = useState([])
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[2]
  const [getPropertyByIDClient] = useGetPropertyByIDClientMutation()
  const [addReview] = useAddReviewMutation()

  const showPropertiesDetails = useCallback(async () => {
    const res = await getPropertyByIDClient(propertyID).unwrap()
    console.log(res)
    setProppertyDetails(res.property)
    setVideoFile(res.property.media.video)
    setSimilarProppertyDetails(res.similarProperties)
  }, [getPropertyByIDClient, propertyID])

  useEffect(() => {
    showPropertiesDetails()
  }, [showPropertiesDetails])

  const similarProperties = similarPropertyDetails.map((property) => {
    return <SimilarPropertyCard key={property?._id} property={property} />
  })

  const { handleSubmit, register } = useForm()

  const changeRating = (newRating, name) => {
    setReviewRatings((prevState) => {
      return { ...prevState, [name]: newRating }
    })
  }

  console.log(videoFile)

  const handleSubmitReview = async (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append(`property`, parseInt(reviewRatings.property))
    formData.append(`valueForMoney`, parseInt(reviewRatings.valueForMoney))
    formData.append(`location`, parseInt(reviewRatings.location))
    formData.append(`support`, parseInt(reviewRatings.support))
    formData.append(`name`, data.name)
    formData.append(`email`, data.email)
    formData.append(`review`, data.review)

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    try {
      const res = await addReview({
        propertyId: propertyID,
        body: formData,
      }).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DefaultLayout>
      <Box className='page_alignment' bgColor={`black`}>
        <Container paddingBlock={0}>
          <GridImageLayout
            isNotEditProperty
            imageSet={propertyDetails?.media?.imgs}
          />
        </Container>
      </Box>
      {/* section two  with unique layer */}
      <Box className='page_alignment' bgColor={`black`}>
        <Container>
          {/* section two  with unique layer */}
          <TwoColumnLayout>
            {/* grid one */}
            <GridItem colSpan={{ base: 2, lg: 8 }} color={`white`}>
              {/* tags */}
              <Flex gap={5}>
                <Tag
                  bgColor={`accentBlue`}
                  color={`primary`}
                  text={propertyDetails?.tags?.[0]}
                >
                  {/* <FaNetworkWired /> */}
                </Tag>
                <Tag
                  bgColor={`accentRed`}
                  color={`red`}
                  text={propertyDetails?.tags?.[1]}
                >
                  {/* <MdOutlineFamilyRestroom /> */}
                </Tag>
              </Flex>
              {/* title */}
              <Flex
                flexDir={{ base: `column`, lg: `row` }}
                justifyContent={`space-between`}
                alignItems={`flex-start`}
                my={5}
              >
                <Box>
                  <Heading fontSize={{ base: `3xl`, lg: `40px` }}>
                    {propertyDetails?.title}
                  </Heading>
                  <Text color={`textGrey`} fontSize={`xl`}>
                    {propertyDetails?.location}
                  </Text>
                  <Text fontSize={`4xl`} color={`#0FB7C1`} fontWeight={`bold`}>
                    ${propertyDetails?.price}
                  </Text>
                </Box>
                <Box>
                  <LinkButton
                    text={`Book Now`}
                    width={`158px`}
                    height={`42px`}
                  />
                </Box>
              </Flex>
              {/* desc */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7}>
                <Heading fontSize={`xl`} mb={5}>
                  Description
                </Heading>
                <Text color={`textGrey`}>{propertyDetails?.description}</Text>
              </Box>
              {/* features */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Features
                </Heading>
                <Flex
                  color={`textGrey`}
                  flexWrap={`wrap`}
                  justifyContent={`space-between`}
                  gap={3}
                >
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[0]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[1]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[2]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[3]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[4]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <GiHomeGarage size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={propertyDetails?.features?.[5]}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdCropSquare size={`1.5rem`} />
                  </Tag>
                </Flex>
              </Box>
              {/* property video */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Property Video
                </Heading>
                <Box borderRadius={7} overflow={`hidden`}>
                  <ReactPlayer
                    width={`100%`}
                    controls
                    url={propertyDetails?.media?.video}
                  />
                </Box>
              </Box>
              {/* Ratings */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Visitor Ratings
                </Heading>
                <Flex
                  flexDir={{ base: `column`, lg: `row` }}
                  borderRadius={7}
                  bgColor={`bgBlack`}
                  p={5}
                >
                  <Box
                    textAlign={`center`}
                    borderRight={{ lg: `1px solid grey` }}
                    p={5}
                  >
                    <Text fontSize={`4xl`} fontWeight={`bold`}>
                      {propertyDetails?.avgReviewScore}
                    </Text>
                    <Text>out of 5.0</Text>
                    <Box mt={3}>
                      <StarRatings
                        starRatedColor='orange'
                        rating={propertyDetails?.avgReviewScore}
                        starDimension='20px'
                        starSpacing='5px'
                      />
                    </Box>
                  </Box>
                  <Box flex={1} p={5}>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Property</Text>
                          <Text>{propertyDetails?.avgPropertyScore}</Text>
                        </Flex>
                        <Progress
                          value={propertyDetails?.avgPropertyScore}
                          size='xs'
                          colorScheme='orange'
                        />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Value for Money</Text>
                          <Text>{propertyDetails?.avgValueForMoneyScore}</Text>
                        </Flex>
                        <Progress
                          value={propertyDetails?.avgValueForMoneyScore}
                          size='xs'
                          colorScheme='orange'
                        />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Location</Text>
                          <Text>{propertyDetails?.avgLocationScore}</Text>
                        </Flex>
                        <Progress
                          value={propertyDetails?.avgLocationScore}
                          size='xs'
                          colorScheme='orange'
                        />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Support</Text>
                          <Text>{propertyDetails?.avgSupportScore}</Text>
                        </Flex>
                        <Progress
                          value={propertyDetails?.avgSupportScore}
                          size='xs'
                          colorScheme='orange'
                        />
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Flex>
              </Box>
              {/* reviews */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Box mb={5}>
                  <Heading fontSize={`xl`}>Reviews</Heading>
                  <Text color={`textGrey`}>1 review</Text>
                </Box>
                <Box mb={5}>
                  <Text fontSize={`xl`}>
                    Aisha Akinwumi{' '}
                    <Text fontSize={`md`} color={`primary`} as={`span`}>
                      (oyelolaifeoluwa@gmail.com)
                    </Text>
                  </Text>
                  <Text color={`#0FB7C1`}>22-03-2023 09:30:20am</Text>
                </Box>
                <Box>
                  <Text color={`textGrey`}>
                    Lorem ipsum dolor sit amet consectetur. Id libero
                    suspendisse eu risus amet vel. Aliquet contur consectetur
                    purus amet ultricies facilisis a pelloique. Telus et cras
                    urna vel vitae. Ornare aliquam dolor enim consequat sapien
                    odio cras integer.
                  </Text>
                </Box>
              </Box>
              {/* Comment a review */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading
                  textAlign={{ base: `center`, lg: `left` }}
                  fontSize={`xl`}
                  mb={5}
                >
                  Write A Review
                </Heading>
                <Flex
                  flexDir={{ base: `column`, lg: `row` }}
                  justifyContent={`space-between`}
                  gap={5}
                >
                  <Box flex={2}>
                    <SimpleGrid
                      justifyItems={{ base: `center`, lg: `initial` }}
                      columns={{ base: 1, sm: 2 }}
                      gap={5}
                    >
                      <Box>
                        <Text mb={2} color={`textGrey`} fontSize={`lg`}>
                          Property
                        </Text>
                        <Box>
                          <StarRatings
                            rating={reviewRatings.property}
                            changeRating={changeRating}
                            name='property'
                            starRatedColor='orange'
                            starDimension='20px'
                            starSpacing='5px'
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Text mb={2} color={`textGrey`} fontSize={`lg`}>
                          Value for money
                        </Text>
                        <Box>
                          <StarRatings
                            rating={reviewRatings.valueForMoney}
                            changeRating={changeRating}
                            name='valueForMoney'
                            starRatedColor='orange'
                            starDimension='20px'
                            starSpacing='5px'
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Text mb={2} color={`textGrey`} fontSize={`lg`}>
                          Location
                        </Text>
                        <Box>
                          <StarRatings
                            rating={reviewRatings.location}
                            changeRating={changeRating}
                            name='location'
                            starRatedColor='orange'
                            starDimension='20px'
                            starSpacing='5px'
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Text mb={2} color={`textGrey`} fontSize={`lg`}>
                          Support
                        </Text>
                        <Box>
                          <StarRatings
                            rating={reviewRatings.support}
                            changeRating={changeRating}
                            name='support'
                            starRatedColor='orange'
                            starDimension='20px'
                            starSpacing='5px'
                          />
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>
                  <Box flex={1}>
                    <Box
                      textAlign={`center`}
                      p={5}
                      bgColor={`bgBlack`}
                      borderRadius={7}
                    >
                      <Text fontSize={`4xl`} fontWeight={`bold`}>
                        0.0
                      </Text>
                      <Text color={`textGrey`}>out of 5.0</Text>
                      <Box mt={3}>
                        <StarRatings
                          starRatedColor='orange'
                          rating={4.5}
                          starDimension='20px'
                          starSpacing='5px'
                        />
                      </Box>
                    </Box>
                  </Box>
                </Flex>
                {/* form */}
                <FormControl mt={5}>
                  <SimpleGrid columns={2} gap={5}>
                    <Input
                      fontSize={`lg`}
                      size={`lg`}
                      border={`1px solid #343434`}
                      type='text'
                      placeholder='Your Name'
                      {...register(`name`)}
                    />
                    <Input
                      fontSize={`lg`}
                      size={`lg`}
                      border={`1px solid #343434`}
                      type='email'
                      placeholder='Email'
                      {...register(`email`)}
                    />
                    <GridItem colSpan={2}>
                      <Textarea
                        height={`10rem`}
                        fontSize={`lg`}
                        border={`1px solid #343434`}
                        placeholder='Compose your review'
                        {...register(`review`)}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Button
                    onClick={handleSubmit(handleSubmitReview)}
                    mt={5}
                    colorScheme={`orange`}
                  >
                    Submit Review
                  </Button>
                </FormControl>
              </Box>
            </GridItem>
            {/* grid two */}
            <GridItem colSpan={{ base: 2, lg: 4 }}>
              <Box>
                {/* sales person card */}
                <SalesPersonCard />
              </Box>
              {/* similar properties */}
              <Box>
                <Heading fontSize={`3xl`} color={`textLight`} mb={5}>
                  Similar Properties
                </Heading>
                <SimpleGrid columns={1} gap={5}>
                  {similarProperties}
                </SimpleGrid>
              </Box>
            </GridItem>
          </TwoColumnLayout>
        </Container>
      </Box>
      <Banner />
      <Box className='page_alignment' bgColor={`black`} color={`white`} py={10}>
        <Container>
          <QuestionBanner />
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default PropertiesDetailsPage
