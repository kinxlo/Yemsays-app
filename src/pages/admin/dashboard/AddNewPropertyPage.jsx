import {
  Alert,
  AlertIcon,
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
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

import TwoColumnLayout from '../../../layout/TwoColumnLayout'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../auth/api/authSlice'
import axios from 'axios'
import ReactPlayer from 'react-player'
import AlertComponent from '../../../components/feedback/Alert'

const links = [
  { name: `Home`, ref: `/admin/dashboard` },
  { name: `Add new Property`, ref: `/admin/property/new` },
]

// const base_URL =

const AdminPropertiesDetailsPage = () => {
  const [isOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [imgPreview, setImgPreview] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    avatar: null,
    property_video: `https://player.vimeo.com/external/392612459.sd.mp4?s=39589128d7c98ba18e262569fc7a5a6d31d89e22&profile_id=164&oauth2_token_id=57447761`,
  })

  const token = useSelector(selectCurrentToken)

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
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} }
      })
    }
  }

  const handleVideoUpload = (id) => {
    let fileInput = document.getElementById(id)
    fileInput.click()
    fileInput.onchange = () => {
      const [file] = fileInput.files
      setImgPreview((prevState) => {
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} }
      })
    }
  }

  const { handleSubmit, register } = useForm()

  const submitNewProperty = async (data) => {
    setLoading(true)
    const formData = new FormData()
    console.log(data)
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

    const video = [...data.video] //not nessecary
    const avatar = [...data.avatar] //not nessecary

    formData.append(`title`, data.title)
    formData.append(`location`, data.location)
    formData.append(`price`, data.price)
    formData.append(`propertyType`, data.propertyType.toLowerCase())
    formData.append(`description`, data.description)
    tags.forEach((tag) => formData.append(`tags[]`, tag))
    features.forEach((feature) => formData.append(`features[]`, feature))
    images.forEach((img) => formData.append(`images`, img))
    formData.append(`video`, video[0])
    formData.append(`salesSupportName`, data.salesSupportName)
    formData.append(`salesSupportNum`, parseInt(data.salesSupportNumber))
    formData.append(`avatar`, avatar[0])

    try {
      // const res = await addProperty(DATA).unwrap()
      const res = await axios.post(
        `https://yemsay-v2.onrender.com/api/v1/property/admin`,
        formData,
        credentials
      )
      console.log(res)
      if (res.data.success) {
        setLoading(false)
        setOpen(true)
      }
    } catch (err) {
      setLoading(false)
      // setOpen(true)
    }
  }

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(submitNewProperty)}>
      <AlertComponent
        message={{
          title: `Property added succefully!`,
          desc: `A new property has been added to the dashboard, continue to view it`,
        }}
        isOpen={isOpen}
        onClose={() => setOpen(!isOpen)}
      />
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Add New Property`} links={links} />
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
          <Text fontSize={{ lg: `xl` }}>New Title</Text>
          <Text fontSize={{ lg: `xl` }} color={`textGrey`}>
            <Text color={`primary`} as={`span`}>
              Property
            </Text>{' '}
            / Address
          </Text>
        </Box>
        <Flex gap={5}>
          <Button
            isLoading={isLoading}
            loadingText={`saving...`}
            type={`submit`}
            borderRadius={10}
            p={6}
            colorScheme={`orange`}
            width={`126px`}
          >
            Save
          </Button>
        </Flex>
      </Flex>
      {/* form fields */}
      <Box my={10}>
        <Grid
          h='562px'
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={4}
          // overflow={`hidden`}
          // borderRadius={10}
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
                  // required
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
              className={`cc-img-fluid`}
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
                  // required
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
                  // required
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
                  // required
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
                    required
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
                    required
                    variant='outline'
                    // border={`1px solid grey`}
                    // background={`bgBlack`}
                    // color={`red`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    {...register(`propertyType`)}
                  >
                    <option
                      style={{ color: `black`, fontWeight: `bold` }}
                      value={`land`}
                    >
                      Land
                    </option>
                    <option
                      style={{ color: `black`, fontWeight: `bold` }}
                      value={`house`}
                    >
                      House
                    </option>
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
                    required
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
                    required
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
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
                    color='primary'
                    h={`100%`}
                  >
                    <Box fontSize={`2xl`}>
                      <Icon icon={`material-symbols:location-on`} />
                    </Box>
                  </InputLeftElement>

                  <Input
                    required
                    px={20}
                    pt={1}
                    borderColor={`textGrey`}
                    fontSize={`xl`}
                    borderRadius={15}
                    h={`62px`}
                    type='text'
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
                required
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
                      <Box color={`primary`} fontSize={`3xl`}>
                        <Icon icon={`mdi:bedroom-outline`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      {...register(`feat_1`)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box color={`primary`} fontSize={`xl`}>
                        <Icon icon={`cil:bathroom`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      {...register(`feat_2`)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box color={`primary`} fontSize={`3xl`}>
                        <Icon icon={`mdi:bedroom-outline`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      {...register(`feat_3`)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box color={`primary`} fontSize={`xl`}>
                        <Icon icon={`cil:garage`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      {...register(`feat_4`)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box color={`primary`} fontSize={`xl`}>
                        <Icon icon={`material-symbols:location-on`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
                      {...register(`feat_5`)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w={`200px`}>
                  <InputGroup>
                    <InputLeftElement h={`100%`}>
                      <Box color={`primary`} fontSize={`xl`}>
                        <Icon icon={`cil:garage`} />
                      </Box>
                    </InputLeftElement>
                    <Input
                      required
                      size={`lg`}
                      borderColor={`textGrey`}
                      borderRadius={10}
                      type='text'
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
                          // required
                          hidden
                          id={`property_video`}
                          type={`file`}
                          accept='video/mp4'
                          {...register(`video`)}
                        />
                        <Icon icon={`material-symbols:photo-camera-outline`} />
                        <Text textAlign={`center`}>Click to change image</Text>
                      </Center>
                    </Center>
                  </Box>
                  <ReactPlayer width={`100%`} url={imgPreview.property_video} />
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
                            // required
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
                          required
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
                          required
                          borderRadius={15}
                          size={`lg`}
                          placeholder='08118951879'
                          _placeholder={{ fontSize: `xl` }}
                          {...register(`salesSupportNumber`)}
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
    </FormControl>
  )
}

export default AdminPropertiesDetailsPage
