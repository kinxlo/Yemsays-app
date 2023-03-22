import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

import TwoColumnLayout from '../../../layout/TwoColumnLayout'

import SalesPersonCard from '../../../components/saleperson-profile-card/SalesPersonCard'
import GridImageLayout from '../../../layout/GridImageLayout/GridImageLayout'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import EditImgOverlay from '../../../components/editImgOverlay/EditImgOverlay'
import SalePersonEditForm from '../../../components/admin/salePersonEditForm/SalePersonEditForm'

const links = [
  { name: `Home`, ref: `/` },
  { name: `properties`, ref: `/properties` },
  { name: `propertiesDetails`, ref: `/properties Details` },
  { name: `Edit`, ref: `/Edit` },
]

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  const [isListed, setListed] = useState(false)
  return (
    <>
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Edit Properties Details`} links={links} />
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
          <Button
            onClick={() => setListed(!isListed)}
            display={isListed ? `none` : `block`}
            borderRadius={10}
            p={6}
            colorScheme={`orange`}
            width={`126px`}
          >
            Save
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
            <Flex flexDir={{ base: `column`, lg: `row` }} gap={5}>
              <Box flex={2}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Tags
                  </FormLabel>
                  <Input
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                  />
                </FormControl>
              </Box>
              <Box flex={1}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Property type
                  </FormLabel>
                  <Select
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    placeholder='Select country'
                  >
                    <option>Land</option>
                    <option>House</option>
                  </Select>
                </FormControl>
              </Box>
            </Flex>
            {/* title */}
            <Flex flexDir={{ base: `column`, lg: `row` }} gap={5} my={5}>
              <Box flex={2}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Title
                  </FormLabel>
                  <Input
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                  />
                </FormControl>
              </Box>
              <Box flex={1}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Sales Price
                  </FormLabel>
                  <Input
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    placeholder='$29,630:00'
                    _placeholder={{ fontSize: `xl` }}
                  />
                </FormControl>
              </Box>
            </Flex>
            {/* location */}
            <Flex mb={10}>
              <FormControl>
                <FormLabel fontSize={`xl`} color={`textGrey`}>
                  Location
                </FormLabel>
                <InputGroup>
                  {/* <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    h={`100%`}
                  >
                <Box fontSize={`2xl`}>
                  <Icon icon={`material-symbols:location-on`} />
                </Box>
                </InputLeftElement> */}

                  <Input
                    px={20}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    placeholder='3, Ogunlesi Street, Lagos 100252'
                    _placeholder={{ fontSize: `xl` }}
                  />
                </InputGroup>
              </FormControl>
            </Flex>
            {/* desc */}
            <Box>
              <Heading color={`textGrey`} fontSize={`xl`} mb={5}>
                Description
              </Heading>
              <Text border={`1px solid #343434`} p={8} borderRadius={7}>
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
            <Box my={10}>
              <Heading color={`textGrey`} fontSize={`xl`} mb={5}>
                Features
              </Heading>
              <Flex
                border={`1px solid #343434`}
                p={8}
                borderRadius={7}
                flexWrap={`wrap`}
                color={`textGrey`}
                gap={5}
              >
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`3xl`}>
                        <Icon icon={`mdi:bedroom-outline`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bedroom'
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`xl`}>
                        <Icon icon={`cil:bathroom`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bathroom'
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`3xl`}>
                        <Icon icon={`mdi:bedroom-outline`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bedroom'
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`xl`}>
                        <Icon icon={`cil:garage`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='Garage'
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`xl`}>
                        <Icon icon={`material-symbols:location-on`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 Square feet'
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box fontSize={`xl`}>
                        <Icon icon={`cil:garage`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='Garage'
                    />
                  </InputGroup>
                </FormControl>
              </Flex>
            </Box>
            {/* property video */}
            <Box my={10}>
              <Heading color={`textGrey`} fontSize={`xl`} mb={5}>
                Property Video
              </Heading>
              <Box border={`1px solid #343434`} p={8} borderRadius={7}>
                <Center pos={`relative`} borderRadius={7} overflow={`hidden`}>
                  <EditImgOverlay />
                  <video width={`100%`}>
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
                </Center>
              </Box>
            </Box>
          </GridItem>
          {/* grid two */}
          <GridItem colSpan={{ base: 1, lg: 4 }}>
            <Box>
              {/* sales person card */}
              <SalePersonEditForm />
            </Box>
          </GridItem>
        </TwoColumnLayout>
      </Box>
    </>
  )
}

export default AdminPropertiesDetailsPage
