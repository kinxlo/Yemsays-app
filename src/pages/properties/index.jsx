import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../components/banner/Banner'
import QuestionBanner from '../../components/banner/QuestionBanner'
import PropertyCard from '../../components/property-card/PropertyCard'
import SearchForm from '../../components/search-form/SearchForm'
import Container from '../../layout/Container'
import DefaultLayout from '../../layout/DefaultLayout'
import SpinnerComponent from '../../components/feedback/SpinnerComponent'
// import {
//   useListHousePropertiesMutation,
//   useListLandPropertiesMutation,
// } from '../admin/dashboard/api/propertiesApiSlice'
import {
  selectPropertyState,
  selectUserHouseProperties,
  selectUserLandProperties,
} from '../admin/dashboard/api/propertiesSlice'

const Properties = () => {
  const [isSearch, setSearch] = useState(false)
  // const [listLandProperties, { isLoading }] = useListLandPropertiesMutation()
  // const [listHouseProperties] = useListHousePropertiesMutation()
  const userLandProperties = useSelector(selectUserLandProperties)
  const userHouseProperties = useSelector(selectUserHouseProperties)
  const propertyState = useSelector(selectPropertyState)

  // const showLandProperties = useCallback(async () => {
  //   await listLandProperties().unwrap()
  // }, [listLandProperties])

  // const showHouseProperties = useCallback(async () => {
  //   await listHouseProperties().unwrap()
  // }, [listHouseProperties])

  // useEffect(() => {
  //   showLandProperties()
  //   showHouseProperties()
  // }, [showHouseProperties, showLandProperties])

  const properties = propertyState.isLand ? (
    userLandProperties?.length ? (
      userLandProperties?.map((property) => {
        return <PropertyCard key={property.id} featuredProperty={property} />
      })
    ) : (
      <Text textAlign={`center`} width={{ xl: `1091px` }}>
        No Land Property found!
      </Text>
    )
  ) : userHouseProperties?.length ? (
    userHouseProperties?.map((property) => {
      return <PropertyCard key={property.id} featuredProperty={property} />
    })
  ) : (
    <Text textAlign={`center`} width={{ xl: `1091px` }}>
      No house Property found!
    </Text>
  )

  return (
    <DefaultLayout>
      {/* hero section */}
      <Box
        className='page_alignment'
        bgColor={`bgBlack`}
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
      <Box
        className='page_alignment'
        bgColor={`bgBlack`}
        py={10}
        display={{ base: `block` }}
      >
        <SearchForm setSearch={setSearch} />
      </Box>
      {/* section two */}
      <Box bgColor={`bgBlack`} color={`white`} className='page_alignment'>
        <Container>
          <Box textAlign={`center`} mb={10}>
            <Heading fontSize={{ base: `3xl`, lg: `5xl` }} color={`textLight`}>
              Property Listings - {propertyState.isLand ? `land` : `House`}
            </Heading>
            <Text
              hidden={
                !isSearch
                // ||
                // propertyState.isLandListingLoading ||
                // propertyState.isHouseListingLoading
              }
              color={`textGrey`}
              fontSize={`lg`}
            >
              Search Results For:{' '}
              {propertyState.isLand ? `land properties` : `House properties`}
            </Text>
          </Box>
          <Box>
            {propertyState.isLandListingLoading ||
            propertyState.isHouseListingLoading ? (
              <SpinnerComponent size={`xl`} />
            ) : (
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
                {properties}
              </SimpleGrid>
            )}
          </Box>
        </Container>
      </Box>
      {/* banner */}
      <Box bgColor={`bgBlack`} py={10}>
        <Banner />
      </Box>
      <Box bgColor={`bgBlack`} className='page_alignment'>
        <Container>
          <Box>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
              {properties}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      {/* question banner */}
      <Box bgColor={`bgBlack`} color={`white`} className='page_alignment'>
        <Container>
          <QuestionBanner />
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default Properties
