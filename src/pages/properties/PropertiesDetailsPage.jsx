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
import SpinnerComponent from '../../components/feedback/SpinnerComponent'
import AlertComponent from '../../components/feedback/Alert'
import useFormatCurrency from '../../hooks/useFormatCurrency'

const PropertiesDetailsPage = () => {
  const [isOpen, setOpen] = useState(false)
  const [propertyDetails, setPropertyDetails] = useState({})
  const [reviewRatings, setReviewRatings] = useState({
    property: 0,
    valueForMoney: 0,
    location: 0,
    support: 0,
  })
  const [similarPropertyDetails, setSimilarPropertyDetails] = useState([])
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[2]
  const [getPropertyByIDClient, args1] = useGetPropertyByIDClientMutation()
  const [addReview, arg2] = useAddReviewMutation()
  const { formattedCurrency } = useFormatCurrency(propertyDetails)

  const showPropertiesDetails = useCallback(async () => {
    const res = await getPropertyByIDClient(propertyID).unwrap()
    setPropertyDetails(res.data.property)
    setSimilarPropertyDetails(res.data.similarProperties)
  }, [getPropertyByIDClient, propertyID])

  useEffect(() => {
    showPropertiesDetails()
  }, [showPropertiesDetails])

  const reviews = propertyDetails?.reviewers?.map((review) => {
    return (
      <Box mb={6} key={review._id}>
        <Box mb={2}>
          <Text fontSize={`xl`}>
            {review.name}{' '}
            <Text fontSize={`md`} color={`primary`} as={`span`}>
              ({review.email})
            </Text>
          </Text>
          <Text color={`#0FB7C1`}>
            {new Date(review.createdAt).toLocaleString()}
          </Text>
        </Box>
        <Box>
          <Text color={`textGrey`}>{review.review}</Text>
        </Box>
      </Box>
    )
  })

  const similarProperties = similarPropertyDetails?.map((property) => {
    return <SimilarPropertyCard key={property?.id} property={property} />
  })

  const { handleSubmit, register } = useForm()

  const changeRating = (newRating, name) => {
    setReviewRatings((prevState) => {
      return { ...prevState, [name]: newRating }
    })
  }

  const totalReviewRating = (ratings) => {
    const sum = Object.values(ratings).reduce(
      (total, rating) => total + rating,
      0
    )
    const count = Object.values(ratings).length
    const average = sum / count
    return average
    // return Math.floor(average)
  }

  const handleSubmitReview = async (data) => {
    const formDataII = {
      property: reviewRatings.property,
      valueForMoney: reviewRatings.valueForMoney,
      location: reviewRatings.location,
      support: reviewRatings.support,
      name: data.name,
      email: data.email,
      review: data.review,
    }

    try {
      const res = await addReview({
        propertyId: propertyID,
        body: formDataII,
      }).unwrap()
      if (res.success) {
        setOpen(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <AlertComponent
        action={`message`}
        message={{
          title: `message sent successfully!`,
          desc: `Your review has been added to the property reviews.`,
        }}
        isOpen={isOpen}
        onClose={() => setOpen(!isOpen)}
      />
      <Box className='page_alignment' bgColor={`black`}>
        <Container paddingBlock={0}>
          <GridImageLayout
            isLoading={args1.isLoading}
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
                    {formattedCurrency}
                  </Text>
                </Box>
                <Box>
                  <LinkButton
                    to={`/book-now`}
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
                {args1.isLoading ? (
                  <SpinnerComponent size={`lg`} />
                ) : (
                  <Text color={`textGrey`}>{propertyDetails?.description}</Text>
                )}
              </Box>
              {/* features */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Features
                </Heading>
                {args1.isLoading ? (
                  <SpinnerComponent size={`lg`} />
                ) : (
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
                )}
              </Box>
              {/* property video */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Property Video
                </Heading>
                <Box borderRadius={7} overflow={`hidden`}>
                  {args1.isLoading ? (
                    <SpinnerComponent size={`lg`} />
                  ) : (
                    <ReactPlayer
                      width={`100%`}
                      controls
                      url={propertyDetails?.media?.video}
                    />
                  )}
                </Box>
              </Box>
              {/* Ratings */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                <Heading fontSize={`xl`} mb={5}>
                  Visitor Ratings
                </Heading>
                {args1.isLoading ? (
                  <SpinnerComponent size={`lg`} />
                ) : (
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
                        {propertyDetails?.totalRating}
                      </Text>
                      <Text>out of 5.0</Text>
                      <Box mt={3}>
                        <StarRatings
                          starRatedColor='orange'
                          rating={propertyDetails?.totalRating}
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
                            <Text>{propertyDetails?.propertyRating}</Text>
                          </Flex>
                          <Progress
                            max={5}
                            value={propertyDetails?.propertyRating}
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
                            <Text>{propertyDetails?.valueForMoneyRating}</Text>
                          </Flex>
                          <Progress
                            max={5}
                            value={propertyDetails?.valueForMoneyRating}
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
                            <Text>{propertyDetails?.locationRating}</Text>
                          </Flex>
                          <Progress
                            max={5}
                            value={propertyDetails?.locationRating}
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
                            <Text>{propertyDetails?.supportRating}</Text>
                          </Flex>
                          <Progress
                            max={5}
                            value={propertyDetails?.supportRating}
                            size='xs'
                            colorScheme='orange'
                          />
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </Flex>
                )}
              </Box>
              {/* reviews */}
              <Box border={`1px solid #343434`} p={8} borderRadius={7} my={10}>
                {args1.isLoading ? (
                  <SpinnerComponent size={`lg`} />
                ) : (
                  <>
                    <Box mb={5}>
                      <Heading fontSize={`xl`}>Reviews</Heading>
                      <Text color={`textGrey`}>
                        {propertyDetails?.reviewers?.length} review
                      </Text>
                    </Box>
                    {reviews}
                  </>
                )}
              </Box>
              {/* Comment a review */}
              <Box
                as='form'
                onSubmit={handleSubmit(handleSubmitReview)}
                border={`1px solid #343434`}
                p={8}
                borderRadius={7}
                my={10}
              >
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
                        {totalReviewRating(reviewRatings)}
                      </Text>
                      <Text color={`textGrey`}>out of 5.0</Text>
                      <Box mt={3}>
                        <StarRatings
                          starRatedColor='orange'
                          rating={totalReviewRating(reviewRatings)}
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
                      required
                      fontSize={`lg`}
                      size={`lg`}
                      border={`1px solid #343434`}
                      type='text'
                      placeholder='Your Name'
                      {...register(`name`)}
                    />
                    <Input
                      required
                      fontSize={`lg`}
                      size={`lg`}
                      border={`1px solid #343434`}
                      type='email'
                      placeholder='Email'
                      {...register(`email`)}
                    />
                    <GridItem colSpan={2}>
                      <Textarea
                        required
                        height={`10rem`}
                        fontSize={`lg`}
                        border={`1px solid #343434`}
                        placeholder='Compose your review'
                        {...register(`review`)}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Button
                    type='submit'
                    isLoading={arg2.isLoading}
                    loadingText='Sending review...'
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
                <SalesPersonCard
                  isLoading={args1.isLoading}
                  salePerson={propertyDetails?.salesSupport}
                />
              </Box>
              {/* similar properties */}
              <Box>
                <Heading fontSize={`3xl`} color={`textLight`} mb={5}>
                  Similar Properties
                </Heading>
                {args1.isLoading ? (
                  <SpinnerComponent size={`xl`} />
                ) : (
                  <SimpleGrid columns={1} gap={5}>
                    {similarProperties}
                  </SimpleGrid>
                )}
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
    </>
  )
}

export default PropertiesDetailsPage
