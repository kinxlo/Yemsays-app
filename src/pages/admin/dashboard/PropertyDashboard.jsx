import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Tab,
  Link,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import AdminPropertyCard from '../../../components/admin/propertyCard/AdminPropertyCard'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import { useGetAllPropertiesMutation } from './api/propertiesApiSlice'
import { useSelector } from 'react-redux'
import { Link as ReactLink } from 'react-router-dom'
import {
  selectHouseProperties,
  selectLandProperty,
} from './api/propertiesSlice'
import SpinnerComponent from '../../../components/feedback/SpinnerComponent'
import EmptyState from '../../../components/feedback/EmptyState'
import emptyState from '../../../assets/dashboardEmptyState.svg'

const links = [
  { name: `Home`, ref: `/admin/dashboard` },
  { name: `properties`, ref: `/admin/properties` },
]

const PropertyDashboard = () => {
  const [propertyType, setPropertyType] = useState(`land`)
  const [getAllProperties, { isLoading }] = useGetAllPropertiesMutation()
  const houseProperties = useSelector(selectHouseProperties)
  const landProperties = useSelector(selectLandProperty)

  let propertyList_L = null
  let propertyList_U = null
  let propertyList_S = null

  const handlePropertyType = (event) => {
    setPropertyType(event.target.value)
  }

  if (propertyType === `land`) {
    propertyList_L = landProperties?.listedProperties?.map((listed) => {
      return (
        <Box key={listed.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed propertyDescription={listed} />
        </Box>
      )
    })
    propertyList_U = landProperties?.unlistedProperties?.map((unlisted) => {
      return (
        <Box key={unlisted.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed={false} propertyDescription={unlisted} />
        </Box>
      )
    })
    propertyList_S = landProperties?.soldProperties?.map((sold) => {
      return (
        <Box key={sold.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard sold propertyDescription={sold} />
        </Box>
      )
    })
  } else {
    propertyList_L = houseProperties?.listedProperties?.map((listed) => {
      return (
        <Box key={listed.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed propertyDescription={listed} />
        </Box>
      )
    })
    propertyList_U = houseProperties?.unlistedProperties?.map((unlisted) => {
      return (
        <Box key={unlisted.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed={false} propertyDescription={unlisted} />
        </Box>
      )
    })
    propertyList_S = houseProperties?.soldProperties?.map((sold) => {
      return (
        <Box key={sold.id} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard sold propertyDescription={sold} />
        </Box>
      )
    })
  }

  const getProperties = useCallback(async () => {
    await getAllProperties().unwrap()
  }, [getAllProperties])

  useEffect(() => {
    getProperties()
  }, [getProperties])

  const handleRefresh = () => {
    getProperties()
  }

  return (
    <>
      <Box id='top' mb={12}>
        <BreadCrumbHeader title={`Properties`} links={links} />
      </Box>
      <Box>
        <Tabs variant='unstyled'>
          <Flex
            flexDir={{ base: `column`, lg: `row` }}
            justifyContent={`space-between`}
            alignItems={`center`}
            gap={5}
          >
            <TabList
              bgColor={`dashboardBG`}
              w={{ base: `100%`, lg: `fit-content` }}
              p={5}
              gap={10}
              borderRadius={15}
            >
              <Tab
                _selected={{ color: 'primary' }}
                fontSize={{ base: `lg`, lg: `2xl` }}
              >
                Listed
              </Tab>
              <Tab
                _selected={{ color: 'primary' }}
                fontSize={{ base: `lg`, lg: `2xl` }}
              >
                Unlisted
              </Tab>
              <Tab
                _selected={{ color: 'primary' }}
                fontSize={{ base: `lg`, lg: `2xl` }}
              >
                Sold
              </Tab>
            </TabList>
            <Flex
              flexDir={{ base: `column`, sm: `row` }}
              alignItems={`center`}
              gap={10}
            >
              <Menu>
                <MenuButton
                  px={10}
                  py={7}
                  h={`100%`}
                  transition='all 0.2s'
                  fontSize={`2xl`}
                  borderRadius={15}
                  _expanded={{ bg: 'primary', color: `white` }}
                  bgColor={`dashboardBG`}
                  color={`primary`}
                  as={Button}
                  rightIcon={
                    <Box mt={-1} ms={5}>
                      <Icon
                        icon={`majesticons:chevron-down-circle`}
                        width={`1.5rem`}
                      />
                    </Box>
                  }
                >
                  {propertyType}
                </MenuButton>
                <MenuList
                  minW={{ base: `10rem`, lg: `11rem` }}
                  mt={1}
                  borderColor={`primary`}
                  bgColor={`dashboardBG`}
                  color={`primary`}
                >
                  <MenuItem
                    onClick={handlePropertyType}
                    value={`land`}
                    bgColor={`transparent`}
                  >
                    Land
                  </MenuItem>
                  <MenuItem
                    onClick={handlePropertyType}
                    value={`house`}
                    bgColor={`transparent`}
                  >
                    House
                  </MenuItem>
                </MenuList>
              </Menu>
              <Center
                onClick={handleRefresh}
                border={`1px solid #F78214`}
                borderRadius={15}
                color='primary'
                bgColor={`dashboardBG`}
                p={5}
              >
                <Icon
                  className={isLoading ? 'rotate-refresh-icon' : null}
                  icon={`pepicons-pop:refresh`}
                  width={`2rem`}
                />
              </Center>

              <Box>
                <Link as={ReactLink} to={`/admin/property/new`}>
                  <Button
                    leftIcon={
                      <Box mt={-1}>
                        <Icon icon={`ic:baseline-plus`} width={`1.5rem`} />
                      </Box>
                    }
                    bgColor={`primary`}
                    borderRadius={15}
                    variant='solid'
                    py={9}
                    width={`12rem`}
                  >
                    <Text fontSize={`2xl`} mb={-1}>
                      Add New
                    </Text>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Flex>

          <TabPanels>
            <TabPanel p={0} my={5}>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : propertyList_L?.length ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {propertyList_L}
                </SimpleGrid>
              ) : (
                <EmptyState
                  img={emptyState}
                  size={`10rem`}
                  message={`We have no listed ${
                    propertyType === `land` ? `land` : `house`
                  } properties at the moment...`}
                >
                  <Link as={ReactLink} to={`/admin/property/new`}>
                    <Button colorScheme={`orange`}>Add a new property</Button>
                  </Link>
                </EmptyState>
              )}
            </TabPanel>
            <TabPanel p={0} my={5}>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : propertyList_U?.length ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {propertyList_U}
                </SimpleGrid>
              ) : (
                <EmptyState
                  img={emptyState}
                  size={`10rem`}
                  message={`We have no unlisted ${
                    propertyType === `land` ? `land` : `house`
                  } properties at the moment...`}
                >
                  <Link as={ReactLink} to={`/admin/property/new`}>
                    <Button colorScheme={`orange`}>Add a new property</Button>
                  </Link>
                </EmptyState>
              )}
            </TabPanel>
            <TabPanel p={0} my={5}>
              {isLoading ? (
                <SpinnerComponent size={`xl`} />
              ) : propertyList_S?.length ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {propertyList_S}
                </SimpleGrid>
              ) : (
                <EmptyState
                  img={emptyState}
                  size={`10rem`}
                  message={`We have no sold ${
                    propertyType === `land` ? `land` : `house`
                  } properties at the moment...`}
                >
                  <Link as={ReactLink} to={`/admin/property/new`}>
                    <Button colorScheme={`orange`}>Add a new property</Button>
                  </Link>
                </EmptyState>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box w={`fit-content`} m={`auto`}>
          <Text textAlign={`center`} textTransform={`capitalize`}>
            <Link href={`#top`}>Back to top</Link>
          </Text>
        </Box>
      </Box>
      {/* card list */}
    </>
  )
}

export default PropertyDashboard
