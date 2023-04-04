import {
  Box,
  Button,
  Card,
  CardBody,
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

import SalesPersonCard from '../../../components/saleperson-profile-card/SalesPersonCard'
import GridImageLayout from '../../../layout/GridImageLayout/GridImageLayout'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import EditImgOverlay from '../../../components/editImgOverlay/EditImgOverlay'
import SalePersonEditForm from '../../../components/admin/salePersonEditForm/SalePersonEditForm'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectPropertyDetails } from './api/propertiesSlice'
import {
  useEditPropertyMutation,
  useGetPropertyByIDMutation,
} from './api/propertiesApiSlice'
import { useForm } from 'react-hook-form'

const links = [
  { name: `Home`, ref: `/` },
  { name: `properties`, ref: `/properties` },
  { name: `propertiesDetails`, ref: `/properties Details` },
  { name: `Edit`, ref: `/Edit` },
]

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  const [isListed, setListed] = useState(false)
  const [videoFile, setVideoFile] = useState(null)
  const [imageFile, setImageFile] = useState([])
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[3]
  const [getPropertyByID] = useGetPropertyByIDMutation()
  const [editProperty] = useEditPropertyMutation()
  const propertiesDetails = useSelector(selectPropertyDetails)
  const [imgPreview, setImgPreview] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    property_video: `https://player.vimeo.com/external/392612459.sd.mp4?s=39589128d7c98ba18e262569fc7a5a6d31d89e22&profile_id=164&oauth2_token_id=57447761`,
  })

  const getPropertiesDetails = useCallback(async () => {
    await getPropertyByID(propertyID).unwrap()
  }, [getPropertyByID, propertyID])

  useEffect(() => {
    getPropertiesDetails()
  }, [getPropertiesDetails])

  const handleImageUpload = (id) => {
    let fileInput = document.getElementById(id)
    fileInput.click()
    fileInput.onchange = () => {
      const [file] = fileInput.files
      let fileObj = {
        fieldname: `images`,
        originalname: file.name,
        mimetype: file.type,
      }
      setImageFile((prevState) => {
        return [...prevState, fileObj]
      })
      setImgPreview((prevState) => {
        return { ...prevState, [id]: URL.createObjectURL(file) }
      })
    }
  }

  const handleVideoUpload = (id) => {
    let fileInput = document.getElementById(id)
    fileInput.click()
    fileInput.onchange = () => {
      const [file] = fileInput.files
      let fileObj = {
        fieldname: `videos`,
        originalname: file.name,
        mimetype: file.type,
      }
      setVideoFile(fileObj)
      setImgPreview((prevState) => {
        return { ...prevState, [id]: URL.createObjectURL(file) }
      })
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitEditedProperty = async (data) => {
    let DATA = {
      title: data.title,
      location: data.location,
      price: data.price,
      propertyType: data.propertyType.toLowerCase(),
      description: data.description,
      tags: data.tags.split(' '),
      features: [
        data.feat_1,
        data.feat_2,
        data.feat_3,
        data.feat_4,
        data.feat_5,
        data.feat_6,
      ],
      images: imageFile,
      video: videoFile,
    }

    console.log(DATA, propertyID)

    try {
      const res = await editProperty({ id: propertyID, body: DATA }).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
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
            // display={isListed ? `none` : `block`}
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
            <EditImgOverlay
              id={`img1`}
              handleClick={() => handleImageUpload(`img1`)}
            />
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={imgPreview.img1}
            />
          </GridItem>
          <GridItem
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
            height={`177px`}
          >
            <EditImgOverlay
              size={`2rem`}
              id={`img2`}
              handleClick={() => handleImageUpload(`img2`)}
            />
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={imgPreview.img2}
            />
          </GridItem>
          <GridItem
            height={`177px`}
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
          >
            <EditImgOverlay
              size={`2rem`}
              id={`img3`}
              handleClick={() => handleImageUpload(`img3`)}
            />
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={imgPreview.img3}
            />
          </GridItem>
          <GridItem
            height={`177px`}
            pos={`relative`}
            colSpan={1}
            bg='dashboardBG'
          >
            <EditImgOverlay
              size={`2rem`}
              id={`img4`}
              handleClick={() => handleImageUpload(`img4`)}
            />
            <Image
              className='cc-img-fluid'
              src={null}
              fallbackSrc={imgPreview.img4}
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
                    defaultValue={propertiesDetails?.property?.tags.join(` `)}
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
                    defaultValue={propertiesDetails?.property?.propertyType}
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
                    defaultValue={propertiesDetails?.property?.title}
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
                    defaultValue={propertiesDetails?.property?.price}
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
                    defaultValue={propertiesDetails?.property?.location}
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
                defaultValue={propertiesDetails?.property?.description}
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
                      defaultValue={propertiesDetails?.property?.features[0]}
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
                      defaultValue={propertiesDetails?.property?.features[1]}
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
                      defaultValue={propertiesDetails?.property?.features[2]}
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
                      defaultValue={propertiesDetails?.property?.features[3]}
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
                      defaultValue={propertiesDetails?.property?.features[4]}
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
                      defaultValue={propertiesDetails?.property?.features[5]}
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
                    <EditImgOverlay
                      id={`property_video`}
                      handleClick={() => handleVideoUpload(`property_video`)}
                    />
                  </Box>
                  <video width={`100%`}>
                    <source
                      defaultValue={propertiesDetails?.property?.video}
                      // src={propertiesDetails?.property?.video}
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
