import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

import TwoColumnLayout from '../../../layout/TwoColumnLayout'

import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import EditImgOverlay from '../../../components/editImgOverlay/EditImgOverlay'
import SalePersonEditForm from '../../../components/admin/salePersonEditForm/SalePersonEditForm'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  selectPropertyDetails,
  setPropertyDetails,
} from './api/propertiesSlice'
import {
  useEditPropertyMutation,
  useGetPropertyByIDMutation,
} from './api/propertiesApiSlice'
import { useForm } from 'react-hook-form'
import { selectCurrentToken } from '../auth/api/authSlice'
import axios from 'axios'
import ReactPlayer from 'react-player'

const links = [
  { name: `Home`, ref: `/` },
  { name: `properties`, ref: `/properties` },
  { name: `propertiesDetails`, ref: `/properties Details` },
  { name: `Edit`, ref: `/Edit` },
]

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  const [isListed, setListed] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[3]
  const [getPropertyByID] = useGetPropertyByIDMutation()
  const propertiesDetails = useSelector(selectPropertyDetails)
  const token = useSelector(selectCurrentToken)
  const [imgPreview, setImgPreview] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    property_video: `https://player.vimeo.com/external/392612459.sd.mp4?s=39589128d7c98ba18e262569fc7a5a6d31d89e22&profile_id=164&oauth2_token_id=57447761`,
  })

  // console.log(propertiesDetails)
  const defaultFormData = {
    title: propertiesDetails?.property?.title,
    location: propertiesDetails?.property?.location,
    tags: propertiesDetails?.property?.tags.join(` `),
    propertyType: propertiesDetails?.property?.propertyType,
    price: propertiesDetails?.property?.price,
    description: propertiesDetails?.property?.description,
    // image_1: propertiesDetails?.property?.media?.imgs[0],
    // image_2: propertiesDetails?.property?.media?.imgs[1],
    // image_3: propertiesDetails?.property?.media?.imgs[2],
    // image_4: propertiesDetails?.property?.media?.imgs[3],
    feat_1: propertiesDetails?.property?.features[0],
    feat_2: propertiesDetails?.property?.features[1],
    feat_3: propertiesDetails?.property?.features[2],
    feat_4: propertiesDetails?.property?.features[3],
    feat_5: propertiesDetails?.property?.features[4],
    feat_6: propertiesDetails?.property?.features[5],
    video: propertiesDetails?.property?.media?.video,
    images: propertiesDetails?.property?.media?.imgs,
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormData,
  })

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const handleImageUpload = (id) => {
    let fileInput = document.getElementById(id)
    fileInput.click()
    fileInput.onchange = () => {
      const [file] = fileInput.files
      setImgPreview((prevState) => {
        return { ...prevState, [id]: URL.createObjectURL(file) }
      })
    }
  }

  const handleVideoUpload = (id) => {
    let fileInput = document.getElementById(id)
    fileInput.click()
  }

  // console.log(defaultFormData)

  const getPropertiesDetails = useCallback(async () => {
    await getPropertyByID(propertyID).unwrap()
  }, [getPropertyByID, propertyID])

  useEffect(() => {
    getPropertiesDetails()
  }, [getPropertiesDetails, reset])

  const submitEditedProperty = async (data) => {
    setLoading(true)
    console.log(data)
    const formData = new FormData()
    const tags = data.tags.split(' ')
    const images = [
      ...data.image_1,
      ...data.image_2,
      ...data.image_3,
      ...data.image_4,
    ]
    const features = [
      data.feat_1,
      data.feat_2,
      data.feat_3,
      data.feat_4,
      data.feat_5,
      data.feat_6,
    ]

    const video = [...data.video]

    formData.append(`title`, data.title)
    formData.append(`location`, data.location)
    formData.append(`price`, data.price)
    formData.append(`propertyType`, data.propertyType.toLowerCase())
    formData.append(`description`, data.description)
    tags.forEach((tag) => formData.append(`tags[]`, tag))
    features.forEach((feature) => formData.append(`features[]`, feature))
    images.forEach((img) => {
      typeof img === `object` ? formData.append(`images`, img) : null
    })
    typeof video[0] === `object` ? formData.append(`video`, video[0]) : null

    console.log(typeof video[0])

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
    try {
      const res = await axios.put(
        `https://yemsay-v2.onrender.com/api/v1/property/admin/${propertyID}`,
        formData,
        credentials
      )
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

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
            onClick={handleSubmit(submitEditedProperty)}
            isLoading={isLoading}
            loadingText='Saving...'
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
        {/* <GridImageLayout /> */}
        <Grid
          h='562px'
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={4}
          borderRadius={10}
          overflow={`hidden`}
        >
          <GridItem
            rowSpan={{ base: 2, lg: 3 }}
            colSpan={{ base: 3, lg: 2 }}
            bg='dashboardBG'
            overflow={`hidden`}
            pos={`relative`}
            height={`100%`}
          >
            <Center
              w={`100%`}
              h={`100%`}
              pos={`absolute`}
              top={`50%`}
              left={`50%`}
              transform={`translate(-50%, -50%)`}
              fontSize={`4rem`}
              bgColor={`#00000090`}
            >
              <Center
                onClick={() => handleImageUpload(`img1`)}
                flexDir={`column`}
              >
                <Input
                  hidden
                  id={`img1`}
                  type={`file`}
                  accept='image/*'
                  {...register(`image_1`)}
                />
                <Icon icon={`material-symbols:photo-camera-outline`} />
                <Text textAlign={`center`}>Click to change image</Text>
              </Center>
            </Center>

            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={
                imgPreview.img1 || propertiesDetails?.property?.media?.imgs[0]
              }
            />
          </GridItem>
          <GridItem
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
            height={`177px`}
          >
            <Center
              w={`100%`}
              h={`100%`}
              pos={`absolute`}
              top={`50%`}
              left={`50%`}
              transform={`translate(-50%, -50%)`}
              fontSize={`2rem`}
              bgColor={`#00000090`}
            >
              <Center
                onClick={() => handleImageUpload(`img2`)}
                flexDir={`column`}
              >
                <Input
                  hidden
                  id={`img2`}
                  type={`file`}
                  accept='image/*'
                  {...register(`image_2`)}
                />
                <Icon icon={`material-symbols:photo-camera-outline`} />
                <Text textAlign={`center`}>Click to change image</Text>
              </Center>
            </Center>

            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={
                imgPreview.img2 || propertiesDetails?.property?.media?.imgs[1]
              }
            />
          </GridItem>
          <GridItem
            height={`177px`}
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
          >
            <Center
              w={`100%`}
              h={`100%`}
              pos={`absolute`}
              top={`50%`}
              left={`50%`}
              transform={`translate(-50%, -50%)`}
              fontSize={`2rem`}
              bgColor={`#00000090`}
            >
              <Center
                onClick={() => handleImageUpload(`img3`)}
                flexDir={`column`}
              >
                <Input
                  hidden
                  id={`img3`}
                  type={`file`}
                  accept='image/*'
                  {...register(`image_3`)}
                />
                <Icon icon={`material-symbols:photo-camera-outline`} />
                <Text textAlign={`center`}>Click to change image</Text>
              </Center>
            </Center>
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={
                imgPreview.img3 || propertiesDetails?.property?.media?.imgs[2]
              }
            />
          </GridItem>
          <GridItem
            height={`177px`}
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
          >
            <Center
              w={`100%`}
              h={`100%`}
              pos={`absolute`}
              top={`50%`}
              left={`50%`}
              transform={`translate(-50%, -50%)`}
              fontSize={`2rem`}
              bgColor={`#00000090`}
            >
              <Center
                onClick={() => handleImageUpload(`img4`)}
                flexDir={`column`}
              >
                <Input
                  hidden
                  id={`img4`}
                  type={`file`}
                  accept='image/*'
                  {...register(`image_4`)}
                />
                <Icon icon={`material-symbols:photo-camera-outline`} />
                <Text textAlign={`center`}>Click to change images</Text>
              </Center>
            </Center>
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={
                imgPreview.img4 || propertiesDetails?.property?.media?.imgs[3]
              }
            />
          </GridItem>
        </Grid>
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
                    // defaultValue={propertiesDetails?.property?.tags.join(` `)}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    {...register(`tags`)}
                  />
                </FormControl>
              </Box>
              <Box flex={1}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Property type
                  </FormLabel>
                  <Select
                    // defaultValue={propertiesDetails?.property?.propertyType}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    {...register(`propertyType`)}
                    // placeholder={propertiesDetails?.propery?.propertyType}
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
                    // defaultValue={propertiesDetails?.property?.title}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    {...register(`title`)}
                  />
                </FormControl>
              </Box>
              <Box flex={1}>
                <FormControl>
                  <FormLabel fontSize={`xl`} color={`textGrey`}>
                    Sales Price
                  </FormLabel>
                  <Input
                    // defaultValue={propertiesDetails?.property?.price}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    placeholder='$29,630:00'
                    _placeholder={{ fontSize: `xl` }}
                    {...register(`price`)}
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
                    // defaultValue={propertiesDetails?.property?.location}
                    px={20}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
                    placeholder='3, Ogunlesi Street, Lagos 100252'
                    _placeholder={{ fontSize: `xl` }}
                    {...register(`location`)}
                  />
                </InputGroup>
              </FormControl>
            </Flex>
            {/* desc */}
            <Box>
              <Heading color={`textGrey`} fontSize={`xl`} mb={5}>
                Description
              </Heading>
              <Textarea
                // defaultValue={propertiesDetails?.property?.description}
                border={`1px solid #343434`}
                p={8}
                borderRadius={7}
                height={`15rem`}
                {...register(`description`)}
              ></Textarea>
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
                      // defaultValue={propertiesDetails?.property?.features[0]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bedroom'
                      {...register(`feat_1`)}
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
                      // defaultValue={propertiesDetails?.property?.features[1]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bathroom'
                      {...register(`feat_2`)}
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
                      // defaultValue={propertiesDetails?.property?.features[2]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 bedroom'
                      {...register(`feat_3`)}
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
                      // defaultValue={propertiesDetails?.property?.features[3]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='Garage'
                      {...register(`feat_4`)}
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
                      // defaultValue={propertiesDetails?.property?.features[4]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='3 Square feet'
                      {...register(`feat_5`)}
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
                      // defaultValue={propertiesDetails?.property?.features[5]}
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      placeholder='Garage'
                      {...register(`feat_6`)}
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
                  <Box zIndex={1}>
                    <Center
                      w={`100%`}
                      h={`100%`}
                      pos={`absolute`}
                      top={`50%`}
                      left={`50%`}
                      transform={`translate(-50%, -50%)`}
                      fontSize={`4rem`}
                      bgColor={`#00000090`}
                    >
                      <Center
                        onClick={() => handleVideoUpload(`property_video`)}
                        flexDir={`column`}
                      >
                        <Input
                          hidden
                          id={`property_video`}
                          type={`file`}
                          accept='video/*'
                          {...register(`video`)}
                        />
                        <Icon icon={`material-symbols:photo-camera-outline`} />
                        <Text textAlign={`center`}>Click to change video</Text>
                      </Center>
                    </Center>
                  </Box>
                  <ReactPlayer
                    width={`100%`}
                    url={
                      // imgPreview.property_video ||
                      propertiesDetails?.property?.media?.video
                    }
                  />
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
