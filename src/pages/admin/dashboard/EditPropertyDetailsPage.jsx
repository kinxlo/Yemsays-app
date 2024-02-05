import {
  Avatar,
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

import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectPropertyDetails } from './api/propertiesSlice'
import { useGetPropertyByIDMutation } from './api/propertiesApiSlice'
import { useForm } from 'react-hook-form'
import { selectCurrentToken } from '../auth/api/authSlice'
import axios from 'axios'
import ReactPlayer from 'react-player'
import AlertComponent from '../../../components/feedback/Alert'
// import FeedbackModal from '../../../components/modals/Modal'

const BASE_URL = import.meta.env.VITE_BASE_URL

// eslint-disable-next-line react/prop-types
const AdminPropertiesDetailsPage = () => {
  // const [action, setAction] = useState(null)
  // const [isOpen, setIsOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  // const [isSuccess, setSuccess] = useState(false)
  const location = useLocation()
  const propertyID = location.pathname.split(`/`)[3]
  const [getPropertyByID] = useGetPropertyByIDMutation()
  // const [editProperty] = useEditPropertyMutation()
  const propertiesDetails = useSelector(selectPropertyDetails)
  const token = useSelector(selectCurrentToken)
  const links = [
    { name: `Home`, ref: `/admin/dashboard` },
    { name: `properties`, ref: `/admin/properties` },
    {
      name: `propertiesDetails`,
      ref: `/admin/properties/${propertyID}/Details`,
    },
    { name: `Edit`, ref: `/Edit` },
  ]
  const [imgPreview, setImgPreview] = useState({
    img1: propertiesDetails?.media?.imgs?.[0],
    img2: propertiesDetails?.media?.imgs?.[1],
    img3: propertiesDetails?.media?.imgs?.[2],
    img4: propertiesDetails?.media?.imgs?.[3],
    avatar: `data:image/png;base64,${propertiesDetails?.salesSupport?.avatar}`,
    property_video: propertiesDetails?.media?.video,
  })
  const [previousImage, setPreviousImage] = useState([])

  // const handleOpen = (action) => {
  //   setAction(action)
  //   setIsOpen(true)
  // }

  // const handleClose = () => {
  //   setIsOpen(false)
  // }

  const defaultFormData = {
    title: propertiesDetails?.title,
    location: propertiesDetails?.location,
    tags: propertiesDetails?.tags.join(` `),
    propertyType: propertiesDetails?.type,
    price: propertiesDetails?.price,
    description: propertiesDetails?.description,
    feat_1: propertiesDetails?.features[0],
    feat_2: propertiesDetails?.features[1],
    feat_3: propertiesDetails?.features[2],
    feat_4: propertiesDetails?.features[3],
    feat_5: propertiesDetails?.features[4],
    feat_6: propertiesDetails?.features[5],
    image_1: propertiesDetails?.media?.imgs[0],
    image_2: propertiesDetails?.media?.imgs[1],
    image_3: propertiesDetails?.media?.imgs[2],
    image_4: propertiesDetails?.media?.imgs[3],
    video: propertiesDetails?.media?.video,
    salesSupportName: propertiesDetails?.salesSupport?.name,
    salesSupportNum: parseInt(propertiesDetails?.salesSupport?.phoneNumber),
    avatar: propertiesDetails?.salesSupport?.avatar,
    images: propertiesDetails?.media?.imgs,
  }

  const { handleSubmit, register, reset } = useForm({
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
      setPreviousImage((prevState) => {
        return [...prevState, defaultFormData[fileInput.name]]
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
      setImgPreview((prevState) => {
        return { ...prevState, [id]: URL.createObjectURL(file) }
      })
    }
  }

  const getPropertiesDetails = useCallback(async () => {
    await getPropertyByID(propertyID).unwrap()
  }, [getPropertyByID, propertyID])

  useEffect(() => {
    getPropertiesDetails()
  }, [getPropertiesDetails, reset])

  const submitEditedProperty = async (data) => {
    setLoading(true)

    const images = [
      ...(typeof data.image_1 === 'string'
        ? [data.image_1]
        : [...data.image_1]),
      ...(typeof data.image_2 === 'string'
        ? [data.image_2]
        : [...data.image_2]),
      ...(typeof data.image_3 === 'string'
        ? [data.image_3]
        : [...data.image_3]),
      ...(typeof data.image_4 === 'string'
        ? [data.image_4]
        : [...data.image_4]),
    ]

    const formData = new FormData()
    const tags = data.tags.split(' ')
    const features = [
      data.feat_1,
      data.feat_2,
      data.feat_3,
      data.feat_4,
      data.feat_5,
      data.feat_6,
    ]
    const video = [...data.video]
    const avatar = [...data.avatar]

    formData.append(`title`, data.title)
    formData.append(`location`, data.location)
    formData.append(`price`, data.price)
    formData.append(`propertyType`, data.propertyType.toLowerCase())
    formData.append(`description`, data.description)
    tags.forEach((tag) => formData.append(`tags[]`, tag))
    features.forEach((feature) => formData.append(`features[]`, feature))
    images.forEach((img) => formData.append(`images`, img))
    previousImage.forEach((img, index) => {
      formData.append(`imgs[${index}]`, img)
    })
    typeof video[0] === `object` ? formData.append(`video`, video[0]) : null
    formData.append(`salesSupportName`, data.salesSupportName)
    formData.append(`salesSupportNum`, parseInt(data.salesSupportNum))
    typeof avatar[0] === `object` ? formData.append(`avatar`, avatar[0]) : null

    try {
      // const res = await editProperty({
      //   id: propertyID,
      //   body: formData,
      // }).unwrap()
      const res = await axios.put(
        `${BASE_URL}/property/admin/${propertyID}`,
        formData,
        credentials
      )
      if (res.status === 200) {
        setLoading(false)
        setOpen(true)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  // onClick={}

  return (
    <>
      {/* <FeedbackModal
        handleAction={handleSubmit(submitEditedProperty)}
        editLoading={isLoading}
        action={action}
        onClose={handleClose}
        isOpen={isOpen}
      /> */}
      <AlertComponent
        message={{
          action: `editProperty`,
          title: `Property details changed succefully!`,
          desc: `The property details has been edited successfully. To exit editing property, continue`,
        }}
        isOpen={isOpen}
        onClose={() => setOpen(!isOpen)}
      />
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Edit Properties Details`} links={links} />
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
          <Button
            onClick={handleSubmit(submitEditedProperty)}
            // onClick={() => handleOpen(`editProperty`)}
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
                  name={`image_1`}
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
              // fallbackSrc={imgPreview.img2 || propertiesDetails?.media?.imgs[0]}
              fallbackSrc={imgPreview.img1}
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
                  name={`image_2`}
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
              // fallbackSrc={imgPreview.img2 || propertiesDetails?.media?.imgs[1]}
              fallbackSrc={imgPreview.img2}
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
                  name={`image_3`}
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
              // fallbackSrc={imgPreview.img3 || propertiesDetails?.media?.imgs[2]}
              fallbackSrc={imgPreview.img3}
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
                  name={`image_4`}
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
              // fallbackSrc={imgPreview.img4 || propertiesDetails?.media?.imgs[3]}
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
                    defaultValue={propertiesDetails?.type}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    {...register(`propertyType`)}
                    placeholder={propertiesDetails?.type}
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
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    h={`100%`}
                  >
                    <Box mt={-1} fontSize={`xl`}>
                      <Icon icon={`material-symbols:location-on`} />
                    </Box>
                  </InputLeftElement>

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
                      imgPreview.property_video ||
                      propertiesDetails?.media?.video
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
              {/* <SalePersonEditForm /> */}
              <Card
                bgColor={`transparent`}
                color={`white`}
                border={`1px solid #343434`}
                borderRadius={7}
                mb={10}
              >
                <CardBody p={10}>
                  <Flex
                    flexDir={`column`}
                    flex='1'
                    gap={10}
                    alignItems='center'
                    flexWrap='wrap'
                  >
                    <Avatar
                      name='Segun Adebayo'
                      src={imgPreview.avatar}
                      size={`2xl`}
                      overflow={`hidden`}
                      pos={`relative`}
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
                          onClick={() => handleImageUpload(`avatar`)}
                          flexDir={`column`}
                        >
                          <Input
                            hidden
                            id={`avatar`}
                            type={`file`}
                            accept='image/*'
                            {...register(`avatar`)}
                          />
                          <Icon
                            icon={`material-symbols:photo-camera-outline`}
                          />
                        </Center>
                      </Center>
                    </Avatar>

                    <FormControl display={`flex`} flexDir={`column`} gap={5}>
                      <Box>
                        <FormLabel color={`textGrey`}>
                          Support In-Charge
                        </FormLabel>
                        <Input
                          borderRadius={15}
                          size={`lg`}
                          placeholder='Ezra Aduramigba'
                          _placeholder={{ fontSize: `xl` }}
                          {...register(`salesSupportName`)}
                        />
                      </Box>
                      <Box>
                        <FormLabel color={`textGrey`}>
                          Contact Details
                          {/* WhatsApp Contact Details */}
                        </FormLabel>
                        <Input
                          borderRadius={15}
                          size={`lg`}
                          placeholder='08118951879'
                          _placeholder={{ fontSize: `xl` }}
                          {...register(`salesSupportNum`)}
                        />
                      </Box>
                    </FormControl>
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
