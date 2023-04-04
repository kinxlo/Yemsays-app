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
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '../../layout/Container'
import DefaultLayout from '../../layout/DefaultLayout'
import { useContactUsMutation } from '../admin/dashboard/api/propertiesApiSlice'
import { CONTACT_CONTENT } from './content'

const ContactUs = () => {
  const { sectionOne, contacts } = CONTACT_CONTENT

  const [contactUs] = useContactUsMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const handleSubmitContact = async (data) => {
    console.log(parseInt(data.phoneNumber))
    const formData = {
      name: data.name,
      email: data.email,
      phoneNumber: parseInt(data.phoneNumber),
      message: data.message,
    }
    // const formData = new FormData()
    // formData.append(`name`, data.name)
    // formData.append(`email`, data.email)
    // formData.append(`phoneNumber`, parseInt(data.phoneNumber))
    // formData.append(`message`, data.message)

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    try {
      const res = await contactUs(formData).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

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
