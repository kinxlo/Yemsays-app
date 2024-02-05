/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'
import {
  MdDateRange,
  MdLocationOn,
  MdOutlineAccessTimeFilled,
} from 'react-icons/md'
import AlertComponent from '../../components/feedback/Alert'
import { useBookApointmentMutation } from '../admin/dashboard/api/propertiesApiSlice'

const BookApointment = () => {
  const [isOpen, setOpen] = useState(false)
  const [isSafeToReset, setIsSafeToReset] = useState(false)
  const [bookApointment, { isLoading }] = useBookApointmentMutation()
  const { handleSubmit, register, reset } = useForm()

  const handleBookNow = async (data) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      location: data.location,
      inspectionDate: data.inspectionDate,
      inspectionTime: data.inspectionTime,
      message: data.message,
    }

    try {
      const res = await bookApointment(formData).unwrap()
      if (res.success) {
        setOpen(true)
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
    <>
      <AlertComponent
        action={`message`}
        message={{
          title: `message sent successfully!`,
          desc: `Our team would respond to you soon..thank you.`,
        }}
        isOpen={isOpen}
        onClose={() => setOpen(!isOpen)}
      />
      {/* hero section */}
      <Box
        className='page_alignment'
        bgColor={`bgBlack`}
        color={`white`}
        textAlign={`center`}
        py={10}
      >
        <Container maxW={`1200px`}>
          <Heading fontSize={{ base: `4xl`, md: `6xl` }} fontWeight={`bold`}>
            Schedule an Inspection With Us
          </Heading>
          <Text
            maxW={`644px`}
            margin={`auto`}
            fontSize={`xl`}
            color={`textGrey`}
          >
            Please fill in this form to book an inspection with us.
          </Text>
        </Container>
      </Box>
      {/* form */}
      <Box bgColor={`bgBlack`} color={`white`}>
        <Container maxW={`768px`}>
          <FormControl as={`form`} onSubmit={handleSubmit(handleBookNow)}>
            <SimpleGrid columns={2} gap={10}>
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaUserAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    type='text'
                    required
                    placeholder='First Name'
                    {...register(`firstName`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 2 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaUserAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    type='text'
                    required
                    placeholder='Last Name'
                    {...register(`lastName`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 3 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaEnvelope color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    type='email'
                    required
                    placeholder='Email Address'
                    {...register(`email`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 4 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaPhoneAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    type='tel'
                    required
                    placeholder='Phone number'
                    {...register(`phoneNumber`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 5 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdLocationOn color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    type='text'
                    required
                    placeholder='Location'
                    {...register(`location`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 6 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdDateRange color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    className='custom-date-input'
                    color={`white`}
                    type='date'
                    required
                    placeholder='Inspection Date'
                    {...register(`inspectionDate`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 7 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdOutlineAccessTimeFilled color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input
                    className='custom-date-input'
                    type='time'
                    required
                    placeholder='Inspection Time'
                    {...register(`inspectionTime`)}
                  />
                </InputGroup>
              </GridItem>
              {/* input 8 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  {/* <InputLeftElement pointerEvents='none'>
                    <AiOutlineUser color='orange' size={`1.5rem`} />
                  </InputLeftElement> */}
                  <Textarea
                    h={`10rem`}
                    required
                    placeholder='Additional Message...'
                    {...register(`message`)}
                  />
                </InputGroup>
              </GridItem>
            </SimpleGrid>
            <Center mt={5}>
              <Button
                type='submit'
                isLoading={isLoading}
                loadingText='Sending message...'
                w={`50%`}
                colorScheme={`orange`}
              >
                Submit
              </Button>
            </Center>
          </FormControl>
        </Container>
      </Box>
    </>
  )
}

export default BookApointment
