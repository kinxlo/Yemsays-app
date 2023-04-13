import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link as ReactLink } from 'react-router-dom'
import AdminPropertyCard from '../../../components/admin/propertyCard/AdminPropertyCard'
import Reviews from '../../../components/admin/reviews-card/Reviews'
import StatCard from '../../../components/admin/stat-card/StatCard'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import SpinnerComponent from '../../../components/feedback/SpinnerComponent'
import TwoColumnLayout from '../../../layout/TwoColumnLayout'
import { useGetDashboardDataMutation } from './api/propertiesApiSlice'
import { selectDashboardData } from './api/propertiesSlice'
import welcome from '../../../assets/Welcome.svg'

const links = [
  { name: `Home`, ref: `/admin/dashboard` },
  { name: `dashboard`, ref: `/admin/dashboard` },
]

const Dashboard = () => {
  // const [isLoading, setLoading] = useState(false)
  const [getDashboardData, { isLoading }] = useGetDashboardDataMutation()
  const dashboardData = useSelector(selectDashboardData)

  const showDashboardData = useCallback(async () => {
    await getDashboardData().unwrap()
  }, [getDashboardData])

  useEffect(() => {
    showDashboardData()
  }, [showDashboardData])

  const reviews = dashboardData?.reviews?.map((review, index) => {
    return <Reviews key={index} review={review} />
  })

  return (
    <>
      <Box>
        <BreadCrumbHeader title={`Dashboard`} links={links} />
      </Box>
      {/* card list */}
      {dashboardData ? (
        <>
          <Box my={10}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 2, '2xl': 4 }}
              gap={`25px`}
            >
              <StatCard
                title={`All Properties`}
                total={dashboardData?.allProperties}
                isLoading={isLoading}
              />
              <StatCard
                title={`Listed Properties`}
                total={dashboardData?.listed}
                isLoading={isLoading}
              />
              <StatCard
                title={`Unlisted Properties`}
                total={dashboardData?.unlisted}
                isLoading={isLoading}
              />
              <StatCard
                title={`Sold Properties`}
                total={
                  dashboardData?.allProperties -
                  (dashboardData?.unlisted + dashboardData?.listed)
                }
                isLoading={isLoading}
              />
            </SimpleGrid>
          </Box>
          <Box>
            {/* recent properties */}
            <TwoColumnLayout>
              <GridItem colSpan={{ base: 1, lg: 8 }}>
                <Box p={5} borderRadius={10} bgColor={`dashboardBG`}>
                  <Flex
                    flexDir={{ base: `column`, lg: `row` }}
                    justifyContent={`space-between`}
                    alignItems={`center`}
                    mb={5}
                  >
                    <Heading fontSize={{ base: `lg`, lg: `3xl` }}>
                      Recently Added Properties
                    </Heading>
                    <Link
                      to={`/admin/properties`}
                      color={`primary`}
                      as={ReactLink}
                    >
                      <Text>View All Properties</Text>
                    </Link>
                  </Flex>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap={10}>
                    {isLoading ? (
                      <SpinnerComponent size={`xl`} />
                    ) : (
                      <AdminPropertyCard
                        listed={false}
                        propertyDescription={dashboardData?.recentlyAdded[0]}
                      />
                    )}
                    {isLoading ? (
                      <SpinnerComponent size={`xl`} />
                    ) : (
                      <AdminPropertyCard
                        listed={false}
                        propertyDescription={dashboardData?.recentlyAdded[1]}
                      />
                    )}
                    {isLoading ? (
                      <SpinnerComponent size={`xl`} />
                    ) : (
                      <AdminPropertyCard
                        listed={false}
                        propertyDescription={dashboardData?.recentlyAdded[1]}
                      />
                    )}
                    {isLoading ? (
                      <SpinnerComponent size={`xl`} />
                    ) : (
                      <AdminPropertyCard
                        listed={false}
                        propertyDescription={dashboardData?.recentlyAdded[0]}
                      />
                    )}
                  </SimpleGrid>
                </Box>

                {/* <Box
              display={{ base: `none`, lg: `block` }}
              my={10}
              p={5}
              borderRadius={10}
              bgColor={`dashboardBG`}
            >
              <Flex
                flexDir={{ base: `column`, lg: `row` }}
                justifyContent={`space-between`}
                alignItems={`center`}
                mb={5}
              >
                <Heading fontSize={{ base: `lg`, lg: `3xl` }}>
                  Recent Customers
                </Heading>
                <Link color={`primary`} as={ReactLink}>
                  <Text>View All Customers</Text>
                </Link>
              </Flex>
              <Flex flexDir={`column`} gap={5}>
                {!isLoading ? (
                  <SpinnerComponent size={`xl`} />
                ) : (
                  <>
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                  </>
                )}
              </Flex>
            </Box> */}
              </GridItem>
              <GridItem colSpan={{ base: 1, lg: 4 }}>
                <Box borderRadius={10} bgColor={`dashboardBG`} p={5}>
                  <Flex justifyContent={`space-between`} alignItems={`center`}>
                    <Heading fontSize={`3xl`}>Reviews</Heading>
                    {/* <Text color={`primary`}>See All</Text> */}
                  </Flex>
                  <SimpleGrid mt={10} columns={1} gap={3}>
                    {isLoading ? <SpinnerComponent size={`xl`} /> : reviews}
                  </SimpleGrid>
                </Box>
              </GridItem>
            </TwoColumnLayout>
          </Box>
        </>
      ) : (
        <Center flexDir={`column`} h={`30rem`} gap={5}>
          <Image w={`20rem`} src={welcome} />
          <Heading color={`primary`}>Welcome to Yemsays properties</Heading>
          {/* <Text>To continue</Text> */}
          <Link as={ReactLink} to={`/admin/property/new`}>
            <Button colorScheme={`orange`}>Add your first Property</Button>
          </Link>
        </Center>
      )}
    </>
  )
}

export default Dashboard
