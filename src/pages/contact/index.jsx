import {
  Box,
  Flex,
  Heading,
  List,
  Text,
  Center,
  FormControl,
  Input,
  Textarea,
  Button,
  Image,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/Container'
import DefaultLayout from '../../layout/DefaultLayout'
import { useContactUsMutation } from '../admin/dashboard/api/propertiesApiSlice'
import { CONTACT_CONTENT } from './content'

const ContactUs = () => {
  const { sectionOne, contacts } = CONTACT_CONTENT
  const [isSafeToReset, setIsSafeToReset] = useState(false)
  const [contactUs, { isLoading }] = useContactUsMutation()
  const toast = useToast({
    status: 'success',
    variant: 'left-accent',
    position: 'top',
    duration: 5000,
    isClosable: false,
    containerStyle: {
      // width: '500px',
      maxWidth: '100%',
    },
  })
  const location = useLocation()

  const defaultData = {
    email: location?.state?.data?.email,
  }

  const { handleSubmit, register, reset } = useForm({
    defaultValues: defaultData,
  })

  const handleSubmitContact = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      phoneNumber: parseInt(data.phoneNumber),
      message: data.message,
    }

    try {
      const res = await contactUs(formData).unwrap()
      console.log(res)
      if (res.success) {
        toast({ description: `${res.data.message} successfully!` })
        setIsSafeToReset(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!isSafeToReset) return
    reset()
  }, [isSafeToReset, reset])

  return (
    <DefaultLayout>
      <Box className='page_alignment' bgColor={`bgBlack`} color={`white`}>
        <Container>
          <Flex gap={10} mt={10} flexDir={{ base: `column`, lg: `row` }}>
            <Box flex={1}>
              <Box>
                <Heading mb={2} fontSize={`2xl`} color={`primary`}>
                  {sectionOne.title}
                </Heading>
                <Heading fontSize={`4xl`}>{sectionOne.subTitle}</Heading>
              </Box>
              <Box my={10}>
                <Text color={`textGrey`} fontSize={`xl`} lineHeight={`30px`}>
                  {sectionOne.desc}
                </Text>
              </Box>
              <List>
                <Flex alignItems={`center`} gap={3}>
                  <Center
                    boxSize={`60px`}
                    borderRadius={5}
                    bgColor={`primary`}
                    color={`white`}
                  >
                    <FaMapMarkerAlt size={`1.5rem`} />
                  </Center>
                  <Box>
                    <Text fontSize={`xl`}>{contacts[0].title}</Text>
                    <Text>{contacts[0].subTitle}</Text>
                  </Box>
                </Flex>
                <Flex alignItems={`center`} gap={3} my={`29px`}>
                  <Center
                    boxSize={`60px`}
                    borderRadius={5}
                    bgColor={`primary`}
                    color={`white`}
                  >
                    <AiFillPhone size={`1.5rem`} />
                  </Center>
                  <Box>
                    <Text fontSize={`xl`}>{contacts[1].title}</Text>
                    <Text>{contacts[1].subTitle}</Text>
                  </Box>
                </Flex>
                <Flex alignItems={`center`} gap={3}>
                  <Center
                    boxSize={`60px`}
                    borderRadius={5}
                    bgColor={`primary`}
                    color={`white`}
                  >
                    <MdEmail size={`1.5rem`} />
                  </Center>
                  <Box>
                    <Text fontSize={`xl`}>{contacts[2].title}</Text>
                    <Text>{contacts[2].subTitle}</Text>
                  </Box>
                </Flex>
              </List>
            </Box>
            <Flex pos={`relative`} flex={1} justifyContent={`end`}>
              <Box
                display={{ base: `none`, lg: `initial` }}
                pos={`absolute`}
                bottom={-12}
                left={-5}
                boxSize={`123px`}
              >
                <Image
                  className='cc-img-fluid'
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678178009/project-yemsays/image_3_ukipxm.png`}
                />
              </Box>
              <Box
                display={{ base: `none`, lg: `initial` }}
                pos={`absolute`}
                top={-70}
                right={-50}
              >
                <Image
                  className='cc-img-fluid'
                  src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678178332/project-yemsays/Ellipse_16_fhlu0u.png`}
                />
              </Box>
              <Box
                w={{ base: `100%`, lg: `500px` }}
                bgColor={`white`}
                p={10}
                borderRadius={8}
                zIndex={1}
              >
                <FormControl
                  as={`form`}
                  onSubmit={handleSubmit(handleSubmitContact)}
                  color={`textDark`}
                >
                  <Box mb={10}>
                    <Input
                      size={`lg`}
                      placeholder='Your name'
                      {...register(`name`)}
                    />
                  </Box>
                  <Box mb={10}>
                    <Input
                      size={`lg`}
                      placeholder='Email'
                      {...register(`email`)}
                    />
                  </Box>
                  <Box mb={10}>
                    <Input
                      size={`lg`}
                      placeholder='Phone number'
                      {...register(`phoneNumber`)}
                    />
                  </Box>
                  <Box mb={10}>
                    <Textarea
                      h={`10rem`}
                      size={`lg`}
                      placeholder='Message'
                      {...register(`message`)}
                    />
                  </Box>
                  <Box>
                    <Button
                      type='submit'
                      isLoading={isLoading}
                      loadingText='Sending message...'
                      w={`100%`}
                      colorScheme={`orange`}
                      fontWeight={300}
                    >
                      Submit Message
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default ContactUs
