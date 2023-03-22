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
import React, { useState } from 'react'
import { FaNetworkWired } from 'react-icons/fa'
import {
  MdCropSquare,
  MdOutlineBed,
  MdOutlineFamilyRestroom,
} from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { GiHomeGarage } from 'react-icons/gi'
import TwoColumnLayout from '../../../layout/TwoColumnLayout'
import Tag from '../../../components/tag/Tag'
import LinkButton from '../../../components/buttons/link-button/LinkButton'
import SalesPersonCard from '../../../components/saleperson-profile-card/SalesPersonCard'
import GridImageLayout from '../../../layout/GridImageLayout/GridImageLayout'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'

const links = [
  { name: `Home`, ref: `/` },
  { name: `properties`, ref: `/properties` },
  { name: `propertiesDetails`, ref: `/properties Details` },
]

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  const [isListed, setListed] = useState(false)
  return (
    <>
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Properties Details`} links={links} />
      </Box>
      <Flex
        p={5}
        flexDir={{ base: `column`, lg: `row` }}
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
              {isListed ? `Listed Property` : `Unlisted Property`} /
            </Text>{' '}
            3 Ogunlesi Street, Onipanu
          </Text>
        </Box>
        <Flex gap={5}>
          <LinkButton
            to={`/admin/properties/1/details/edit`}
            text={`Edit`}
            height={`66px`}
            width={`115px`}
          />
          <Button
            onClick={() => setListed(!isListed)}
            display={isListed ? `block` : `none`}
            borderRadius={10}
            p={6}
            variant={`outline`}
            colorScheme={`orange`}
          >
            Unlisted Property
          </Button>
          <Button
            onClick={() => setListed(!isListed)}
            display={isListed ? `none` : `block`}
            borderRadius={10}
            p={6}
            variant={`outline`}
            colorScheme={`orange`}
          >
            Listed Property
          </Button>
        </Flex>
      </Flex>
      <Box my={10}>
        <GridImageLayout />
      </Box>
      {/* section two  with unique layer */}
      <Box>
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
              gap={5}
            >
              <Box>
                <Heading fontSize={{ base: `3xl`, lg: `40px` }}>
                  Luxury Family House
                </Heading>
                <Text color={`textGrey`} fontSize={`xl`}>
                  3, Ogunlesi Street, Lagos 100252
                </Text>
              </Box>
              <Box>
                <Text color={`textGrey`}>Sales Price</Text>
                <Text fontSize={`4xl`} color={`#0FB7C1`} fontWeight={`bold`}>
                  $29,630
                </Text>
              </Box>
            </Flex>
            {/* desc */}
            <Box border={`1px solid #343434`} p={8} borderRadius={7}>
              <Heading fontSize={`xl`} mb={5}>
                Description
              </Heading>
              <Text color={`textGrey`}>
                Lorem ipsum dolor sit amet consectetur. Id libero suspendisse eu
                risus amet vel. Aliquet contur consectetur purus amet ultricies
                facilisis a pelloique. Telus et cras urna vel vitae. Ornare
                aliquam dolor enim consequat sapien odio cras integer. Conmentum
                adipiscing duis morbi laoreet aliquet viverra est auctor.
                Aliquam blandit adipiscing potenti enim non proin erat fringilla
                amet. Congue sit ac vulputate scelerisque libero malesuada eget.
                Nulla ultricies aenean tellus congue molestie molestie enim
                porta quisque. Neque imperdiet magna maecenas gravida quisque
                duis porta lacus. Consectetur enim.
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
                <video width={`100%`} controls>
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
          </GridItem>
          {/* grid two */}
          <GridItem colSpan={{ base: 1, lg: 4 }}>
            <Box>
              {/* sales person card */}
              <SalesPersonCard />
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
                    <Button size={`lg`} bgColor={`primary`} color={`white`}>
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
