import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from '../../components/banner/Banner'
import QuestionBanner from '../../components/banner/QuestionBanner'
import PropertyCard from '../../components/property-card/PropertyCard'
import Container from '../../layout/Container'
import DefaultLayout from '../../layout/DefaultLayout'

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
        <Container>
          <Heading fontSize={{ base: `5xl`, md: `7xl` }} fontWeight={`bold`}>
            Properties
          </Heading>
          <Text maxW={`644px`} margin={`auto`} color={`textGrey`}>
            Lörem ipsum Koning buvis ode, när dejelog nidoen dende plus ska, vka
            Din hybrde häfid. Prde sm, vis ode, när dejelog sm, lovien.
          </Text>
        </Container>
      </Box>
      {/* section two */}
      <Box bgColor={`black`} color={`white`} className='page_alignment'>
        <Container>
          <Box textAlign={`center`} mb={10}>
            <Heading fontSize={{ base: `3xl`, lg: `5xl` }} color={`textLight`}>
              Property Listings - {`land` || `House`}
            </Heading>
            <Text color={`textGrey`} fontSize={`lg`}>
              Search Results For: Deluxe
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* banner */}
      <Box bgColor={`black`} py={10}>
        <Banner />
      </Box>
      <Box bgColor={`black`} className='page_alignment'>
        <Container>
          <Box>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* question banner */}
      <Box bgColor={`black`} color={`white`} className='page_alignment'>
        <Container>
          <QuestionBanner />
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default index
