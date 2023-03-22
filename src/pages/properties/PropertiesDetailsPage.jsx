import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Progress,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import {
  MdCropSquare,
  MdOutlineBed,
  MdOutlineFamilyRestroom,
} from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { GiHomeGarage } from 'react-icons/gi'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Tag from '../../components/tag/Tag'
import Container from '../../layout/Container'
// import video from '../../assets/video/video.mp4'
import StarRatings from 'react-star-ratings'
import SalesPersonCard from '../../components/saleperson-profile-card/SalesPersonCard'
import SimilarPropertyCard from '../../components/property-card/SimilarPropertyCard'
import Banner from '../../components/banner/Banner'
import QuestionBanner from '../../components/banner/QuestionBanner'
import DefaultLayout from '../../layout/DefaultLayout'
import TwoColumnLayout from '../../layout/TwoColumnLayout'
import GridImageLayout from '../../layout/GridImageLayout/GridImageLayout'

const PropertiesDetailsPage = () => {
  return (
    <DefaultLayout>
      <Box className='page_alignment' bgColor={`black`}>
        <Container paddingBlock={0}>
          <GridImageLayout />
        </Container>
      </Box>
      {/* section two  with unique layer */}
      <Box className='page_alignment' bgColor={`black`}>
        <Container>
          {/* section two  with unique layer */}
          <TwoColumnLayout>
            {/* grid one */}
            <GridItem colSpan={{ base: 1, lg: 8 }} color={`white`}>
              {/* tags */}
              <Flex gap={5}>
                <Tag bgColor={`accentBlue`} color={`primary`} text={`Network`}>
                  <FaNetworkWired />
                </Tag>
                <Tag bgColor={`accentRed`} color={`red`} text={`Family`}>
                  <MdOutlineFamilyRestroom />
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
                    Luxury Family House
                  </Heading>
                  <Text color={`textGrey`} fontSize={`xl`}>
                    3, Ogunlesi Street, Lagos 100252
                  </Text>
                  <Text fontSize={`4xl`} color={`#0FB7C1`} fontWeight={`bold`}>
                    $29,630
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
                <Text color={`textGrey`}>
                  Lorem ipsum dolor sit amet consectetur. Id libero suspendisse
                  eu risus amet vel. Aliquet contur consectetur purus amet
                  ultricies facilisis a pelloique. Telus et cras urna vel vitae.
                  Ornare aliquam dolor enim consequat sapien odio cras integer.
                  Conmentum adipiscing duis morbi laoreet aliquet viverra est
                  auctor. Aliquam blandit adipiscing potenti enim non proin erat
                  fringilla amet. Congue sit ac vulputate scelerisque libero
                  malesuada eget. Nulla ultricies aenean tellus congue molestie
                  molestie enim porta quisque. Neque imperdiet magna maecenas
                  gravida quisque duis porta lacus. Consectetur enim.
                </Text>
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
                    text={`3 Bedroom`}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={`2 Bathroom`}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={`3 Bedroom`}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <MdOutlineBed size={`1.5rem`} />
                  </Tag>
                  <Tag
                    fs={`lg`}
                    text={`2 Bathroom`}
                    bgColor={`transparent`}
                    color={`textGrey`}
                  >
                    <BiBath size={`1.5rem`} />
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
                    text={`3 Square Feet`}
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
                    text={`3 Square Feet`}
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
                  <video controls>
                    <source
                      src={`https://player.vimeo.com/external/392612459.sd.mp4?s=39589128d7c98ba18e262569fc7a5a6d31d89e22&profile_id=164&oauth2_token_id=57447761`}
                      type='video/mp4'
                    />
                    <track
                      src='captions_en.vtt'
                      kind='captions'
                      srcLang='en'
                      label='english_captions'
                    ></track>
                    Your browser does not support the video tag.
                  </video>
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
                      4.5
                    </Text>
                    <Text>out of 5.0</Text>
                    <Box mt={3}>
                      <StarRatings
                        starRatedColor='orange'
                        rating={4.5}
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
                          <Text>4</Text>
                        </Flex>
                        <Progress value={80} size='xs' colorScheme='orange' />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Value for Money</Text>
                          <Text>5</Text>
                        </Flex>
                        <Progress value={100} size='xs' colorScheme='orange' />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Location</Text>
                          <Text>5</Text>
                        </Flex>
                        <Progress value={100} size='xs' colorScheme='orange' />
                      </Box>
                      <Box>
                        <Flex
                          justifyContent={`space-between`}
                          alignItems={`flex-start`}
                        >
                          <Text mb={2}>Support</Text>
                          <Text>5</Text>
                        </Flex>
                        <Progress value={100} size='xs' colorScheme='orange' />
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
                    />
                    <Input
                      fontSize={`lg`}
                      size={`lg`}
                      border={`1px solid #343434`}
                      type='email'
                      placeholder='Email'
                    />
                    <GridItem colSpan={2}>
                      <Textarea
                        height={`10rem`}
                        fontSize={`lg`}
                        border={`1px solid #343434`}
                        placeholder='Compose your review'
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Button mt={5} colorScheme={`orange`}>
                    Submit Review
                  </Button>
                </FormControl>
              </Box>
            </GridItem>
            {/* grid two */}
            <GridItem colSpan={{ base: 1, lg: 4 }}>
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
                  <SimilarPropertyCard />
                  <SimilarPropertyCard />
                  <SimilarPropertyCard />
                  <SimilarPropertyCard />
                  <SimilarPropertyCard />
                  <SimilarPropertyCard />
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
