import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Banner from '../../components/banner/Banner'
import QuestionBanner from '../../components/banner/QuestionBanner'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Map from '../../components/map/Map'
import ProfileCard from '../../components/profile-card/ProfileCard'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import Container from '../../layout/Container'
import DefaultLayout from '../../layout/DefaultLayout'
import { HOME_CONTENT } from '../home/content'
import { ABOUT_CONTENT } from './content'

const location = {
  address: 'yemsays map',
  lat: 6.53577,
  lng: 3.36596,
}

const index = () => {
  const { hero, sectionTwo, sectionThree, sectionFour } = ABOUT_CONTENT
  const { Testimonials } = HOME_CONTENT
  return (
    <DefaultLayout>
      {/* about hero */}
      <Box
        className='page_alignment'
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677945627/project-yemsays/unsplash_JQUrgUn_pr4_1_hujshp.png`}
        backgroundRepeat={`no-repeat`}
        bgSize={`cover`}
        bgPosition={`center`}
        height={`706`}
        color={`white`}
      >
        <Container>
          <Box mt={32} width={{ md: `50%` }}>
            <Heading fontSize={{ base: `5xl`, md: `6xl` }} fontWeight={`bold`}>
              {hero.title}
            </Heading>
          </Box>
          <Text width={{ md: `50%` }} color={`#D0D0D0`} my={5}>
            {hero.subTitle}
          </Text>
          <Box display={`flex`} alignItems={`center`} gap={4} mt={22}>
            <LinkButton
              to={`/properties`}
              width={167}
              text={`View Properties`}
              height={`40px`}
            />
          </Box>
        </Container>
      </Box>
      {/* section two */}
      <Box
        className='page_alignment'
        bgColor={`textDark`}
        color={`white`}
        py={24}
      >
        <Container paddingBlock={0}>
          <Flex flexDir={{ base: `column`, lg: `row` }} gap={10}>
            <Box flex={1}>
              <Heading fontSize={`lg`} color={`primary`}>
                {sectionTwo.title}
              </Heading>
              <Heading color={`textLight`} mt={3} mb={10}>
                {sectionTwo.subTitle}
              </Heading>
              <Text lineHeight={6}>{sectionTwo.desc}</Text>
              <Flex alignItems={`center`} gap={3} mt={10}>
                <Text>Follow us on:</Text>
                <Flex gap={3}>
                  <FaFacebookF color='orange' />
                  <AiOutlineInstagram color='orange' />
                  <AiOutlineTwitter color='orange' />
                  <FaLinkedinIn color='orange' />
                </Flex>
              </Flex>
            </Box>
            <Box flex={1}>
              <Box maxW={`405px`} ml={`auto`}>
                <Image
                  //   className='cc-img-fluid'
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678009576/project-yemsays/Rectangle_36_mlzg4i.png`}
                />
                <Image
                  //   className='cc-img-fluid'
                  display={{ base: `none`, lg: `block` }}
                  transform={`translate(-40%, -70%)`}
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678009554/project-yemsays/Rectangle_37_ke6cv9.png`}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      {/* section three */}
      <Box bgColor={`black`} color={`textLight`} className='page_alignment'>
        <Container>
          <Heading
            textAlign={`center`}
            fontSize={{ base: `3xl`, md: `5xl` }}
            mb={10}
          >
            {sectionThree.title}
          </Heading>
          <Box>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={5}>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* section four */}
      <Box
        bgColor={`textDark`}
        color={`white`}
        py={24}
        className='page_alignment'
      >
        <Container paddingBlock={0}>
          <Flex flexDir={{ base: `column`, lg: `row` }} gap={10}>
            <Box flex={1}>
              <Heading fontSize={`lg`} color={`primary`}>
                {sectionFour.title}
              </Heading>
              <Heading color={`textLight`} mt={3} mb={10}>
                {sectionFour.subTitle}
              </Heading>
              <Text lineHeight={6}>{sectionFour.desc}</Text>
              <Flex alignItems={`center`} gap={3} mt={10}>
                <Text>For enquires:</Text>
                <Text color={`primary`}>
                  <a href='mailto:info@yemsayspropertiesandinvestment.com'>
                    info@yemsayspropertiesandinvestment.com
                  </a>
                </Text>
              </Flex>
            </Box>
            <Box
              border={`2px solid orange`}
              borderBottomEndRadius={`3rem`}
              borderTopStartRadius={`3rem`}
              overflow={`hidden`}
              height={`30rem`}
              flex={{ xl: 1 }}
            >
              <Map location={location} />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* banner stats */}
      <Banner />
      {/* section five */}
      <Box bgColor={`bgBlack`} color={`white`} className='page_alignment'>
        <Container>
          <Box textAlign={`center`} pt={115} mb={14}>
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

export default index
