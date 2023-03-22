import {
  Box,
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
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'
import {
  MdDateRange,
  MdLocationOn,
  MdOutlineAccessTimeFilled,
} from 'react-icons/md'
import DefaultLayout from '../../layout/DefaultLayout'
// import Container from '../../layout/Container'

const index = () => {
  return (
    <DefaultLayout>
      {/* hero section */}
      <Box
        className='page_alignment'
        bgColor={`black`}
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
      <Box bgColor={`black`} color={`white`}>
        <Container maxW={`768px`}>
          <FormControl>
            <SimpleGrid columns={2} gap={10}>
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaUserAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='text' placeholder='First Name' />
                </InputGroup>
              </GridItem>
              {/* input 2 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaUserAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='text' placeholder='Last Name' />
                </InputGroup>
              </GridItem>
              {/* input 3 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaEnvelope color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='email' placeholder='Email Address' />
                </InputGroup>
              </GridItem>
              {/* input 4 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <FaPhoneAlt color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='tel' placeholder='Phone number' />
                </InputGroup>
              </GridItem>
              {/* input 5 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdLocationOn color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='text' placeholder='Location' />
                </InputGroup>
              </GridItem>
              {/* input 6 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdDateRange color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='date' placeholder='Inspection Date' />
                </InputGroup>
              </GridItem>
              {/* input 7 */}
              <GridItem colSpan={{ base: 2, lg: 1 }}>
                <InputGroup size={`lg`}>
                  <InputLeftElement pointerEvents='none'>
                    <MdOutlineAccessTimeFilled color='orange' size={`1.5rem`} />
                  </InputLeftElement>
                  <Input type='time' placeholder='Inspection Time' />
                </InputGroup>
              </GridItem>
              {/* input 8 */}
              <GridItem colSpan={2}>
                <InputGroup size={`lg`}>
                  {/* <InputLeftElement pointerEvents='none'>
                    <AiOutlineUser color='orange' size={`1.5rem`} />
                  </InputLeftElement> */}
                  <Textarea h={`10rem`} placeholder='Additional Message...' />
                </InputGroup>
              </GridItem>
            </SimpleGrid>
          </FormControl>
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default index
