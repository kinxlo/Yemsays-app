import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Container from '../../layout/Container'
import { HOME_CONTENT } from './content'
import Banner from '../../components/banner/Banner'
import PropertyCard from '../../components/property-card/PropertyCard'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import QuestionBanner from '../../components/banner/QuestionBanner'
import SearchForm from '../../components/search-form/SearchForm'
import DefaultLayout from '../../layout/DefaultLayout'
import img from '../../assets/heroImg.png'
import { useRecentPropertiesMutation } from '../admin/dashboard/api/propertiesApiSlice'
import { useSelector } from 'react-redux'
import { selectRecentProperties } from '../admin/dashboard/api/propertiesSlice'
import ReactPlayer from 'react-player'
import { Icon } from '@iconify/react'
import SpinnerComponent from '../../components/feedback/SpinnerComponent'
import EmptyState from '../../components/feedback/EmptyState'
import emptyState from '../../assets/emptyState.svg'

const reactPlayer = {
  // width: `100%`,
  // height: `100%`,
  // transform: `scale(2)` /* 16:9 aspect ratio */,
}

const Home = () => {
  const { hero, sectionTwo, sectionThree, Testimonials } = HOME_CONTENT
  const [isSearch, setSearch] = useState(true)
  const [play, setPlay] = useState(false)
  const recentProps = useSelector(selectRecentProperties)
  const [recentProperties, { isLoading }] = useRecentPropertiesMutation()

  const showRecentProperties = useCallback(async () => {
    await recentProperties().unwrap()
  }, [recentProperties])

  useEffect(() => {
    showRecentProperties()
  }, [showRecentProperties])

  const recentPropertyList = recentProps?.map((recentProperty) => {
    return (
      <PropertyCard key={recentProperty.id} featuredProperty={recentProperty} />
    )
  })

  return (
    <DefaultLayout>
      {/* hero section */}
      <Box
        className='page_alignment'
        backgroundRepeat={`no-repeat`}
        height={`706`}
        pos={`relative`}
      >
        <Box
          pos={`absolute`}
          top={0}
          left={0}
          w={`100%`}
          h={`100%`}
          _after={{
            pos: `absolute`,
            content: '""',
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            bgColor: `#ffffff60`,
          }}
          zIndex={-1}
        >
          {/* <ReactPlayer
            style={reactPlayer}
            width={`100%`}
            height={`100%`}
            url={`https://player.vimeo.com/external/392612459.sd.mp4?s=39589128d7c98ba18e262569fc7a5a6d31d89e22&profile_id=164&oauth2_token_id=57447761`}
            playing={play}
          /> */}
        </Box>
        <Image
          fallbackSrc={img}
          pos={`absolute`}
          top={0}
          left={0}
          w={`100%`}
          h={`100%`}
          objectFit={`cover`}
          zIndex={-2}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677665416/project-yemsays/unsplash_JQUrgUn_pr4_maw4p0.png`}
        />
        <Container>
          <Box mt={32} width={`fit-content`}>
            <Heading fontSize={{ base: `5xl`, md: `7xl` }} fontWeight={`bold`}>
              {hero.title[0]}
            </Heading>
            <Box display={`flex`} gap={5}>
              <Heading
                fontSize={{ base: `5xl`, md: `7xl` }}
                fontWeight={`bold`}
              >
                {hero.title[1]}
              </Heading>
              <Heading
                pos={`relative`}
                zIndex={0}
                fontSize={{ base: `5xl`, md: `7xl` }}
                fontWeight={`bold`}
                color={`primary`}
                _before={{
                  content: "''",
                  pos: `absolute`,
                  bottom: 5,
                  left: 0,
                  width: `100%`,
                  height: { base: `20%`, lg: `30%` },
                  bg: `white`,
                  zIndex: -1,
                }}
              >
                {hero.title[2]}
              </Heading>
            </Box>
          </Box>
          <Text fontWeight={600} width={{ md: `50%` }}>
            {hero.subTitle}
          </Text>
          <Box display={`flex`} alignItems={`center`} gap={4} mt={22}>
            <LinkButton
              to={`/properties`}
              width={167}
              text={`View Properties`}
              height={`40px`}
            />
            {/* <Box
              onClick={() => setPlay((prevState) => !prevState)}
              bg={`white`}
              borderRadius={`100%`}
              padding={1}
              color={`primary`}
            >
              <Icon
                width={`1.5rem`}
                icon={
                  !play
                    ? `material-symbols:play-arrow-rounded`
                    : `material-symbols:pause`
                }
              />
            </Box> */}
          </Box>
        </Container>
        <Box
          display={{ base: `none`, lg: `block` }}
          transform={`translateY(3rem)`}
        >
          <SearchForm setSearch={setSearch} />
        </Box>
      </Box>
      {/* section two */}
      <Box className='page_alignment' bgColor={`bgBlack`} color={`white`}>
        <Container>
          <Heading
            fontSize={{ base: `3xl`, md: `5xl` }}
            textAlign={`center`}
            mt={30}
            mb={10}
          >
            {sectionTwo.title}
          </Heading>
          {/* card list */}
          <Box
            display={`flex`}
            flexDir={{ base: `column`, md: `row` }}
            gap={16}
          >
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[0].img} alt='icon' />
              </Box>
              <Box px={{ base: 10, md: 0 }}>
                <Heading fontSize={`xl`}>{sectionTwo.cards[0].title}</Heading>
                <Text fontSize={`sm`} color={`textGrey`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, non.
                </Text>
              </Box>
            </Box>
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[1].img} alt='icon' />
              </Box>
              <Box px={{ base: 10, md: 0 }}>
                <Heading fontSize={`xl`}>{sectionTwo.cards[1].title}</Heading>
                <Text fontSize={`sm`} color={`textGrey`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, non.
                </Text>
              </Box>
            </Box>
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[2].img} alt='icon' />
              </Box>
              <Box px={{ base: 10, md: 0 }}>
                <Heading fontSize={`xl`}>{sectionTwo.cards[2].title}</Heading>
                <Text fontSize={`sm`} color={`textGrey`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus, non.
                </Text>
              </Box>
            </Box>
          </Box>
          {/* section two B */}
          <Box
            display={`flex`}
            flexDir={{ base: `column`, lg: `row` }}
            marginTop={44}
            gap={20}
          >
            {/* article Picture */}
            <Box className='page_alignment' flex={1}>
              <Box margin={`auto`} maxW={444}>
                <Image
                  className='cc-img-fluid'
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762969/project-yemsays/unsplash_o_9YmCY0bag_ipyuwz.png'
                  alt='img1'
                />
              </Box>
              <Box
                transform={`translate(12rem, -12rem)`}
                maxW={341}
                display={{ base: `none`, xl: `block` }}
              >
                <Image
                  className='cc-img-fluid'
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762980/project-yemsays/unsplash_UV81E0oXXWQ_tbozsp.png'
                  alt='img2'
                />
              </Box>
            </Box>
            {/* article text */}
            <Box flex={1} marginTop={{ xl: 24 }}>
              <Heading fontSize={`lg`} color={`primary`} mb={1.5}>
                About Us
              </Heading>
              <Heading>{sectionTwo.aboutUs.title}</Heading>
              <Text
                lineHeight={7}
                mt={11}
                mb={{ base: 20, lg: 24 }}
                letterSpacing={`wide`}
                color={`GrayText`}
              >
                {sectionTwo.aboutUs.desc}
              </Text>
              <LinkButton
                to={`/properties`}
                text={`View Properties`}
                width={179}
                height={`40px`}
              />
            </Box>
          </Box>
        </Container>
        {/* the banner component */}
      </Box>
      <Banner />
      <Box
        className='page_alignment'
        bgColor={`bgBlack`}
        color={`white`}
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677823600/project-yemsays/Section_5_rhsutv.png`}
        bgRepeat={`no-repeat`}
        bgPos={`bottom`}
      >
        <Container paddingBlock={0}>
          <Box textAlign={`center`} pt={115}>
            <Heading fontSize={{ base: `3xl`, md: `5xl` }}>
              {sectionThree.title}
            </Heading>
            <Text color={`GrayText`} fontWeight={`bold`}>
              {sectionThree.subTitle}
            </Text>
          </Box>
          <Box>
            {isLoading ? (
              <SpinnerComponent size={`xl`} />
            ) : recentProps?.length ? (
              <SimpleGrid
                mt={14}
                columns={{ base: 1, xl: 2 }}
                gap={`32px`}
                justifyItems={`center`}
                alignItems={`center`}
              >
                {recentPropertyList}
              </SimpleGrid>
            ) : (
              <EmptyState
                img={emptyState}
                size={`10rem`}
                message={`We have no recent properties at the moment... do come back later`}
              />
            )}
          </Box>
        </Container>
      </Box>
      <Box bgColor={`bgBlack`} color={`white`} className='page_alignment'>
        <Container>
          <Box id={`testimonial`} textAlign={`center`} pt={115} mb={14}>
            <Heading color={`primary`} fontSize={`xl`}>
              {Testimonials.title}
            </Heading>
            <Text
              fontSize={{ base: `3xl`, md: `5xl` }}
              color={`textLight`}
              fontWeight={`bold`}
            >
              {Testimonials.subTitle}
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={`32px`}>
              <TestimonialCard />
              <TestimonialCard />
            </SimpleGrid>
          </Box>
          <Box mt={`138px`}>
            <QuestionBanner />
          </Box>
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default Home
