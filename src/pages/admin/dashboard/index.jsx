import {
  Box,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import AdminPropertyCard from '../../../components/admin/propertyCard/AdminPropertyCard'
import CustomerCard from '../../../components/admin/recentCustomerCard/CustomerCard'
import Reviews from '../../../components/admin/reviews-card/Reviews'
import StatCard from '../../../components/admin/stat-card/StatCard'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'
import TwoColumnLayout from '../../../layout/TwoColumnLayout'

const links = [
  { name: `Home`, ref: `/` },
  { name: `dashboard`, ref: `/dashboard` },
]

const index = () => {
  return (
    <>
      <Box>
        <BreadCrumbHeader title={`Dashboard`} links={links} />
      </Box>
      {/* card list */}
      <Box my={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={`25px`}>
          <StatCard title={`All Properties`} total={50} />
          <StatCard title={`Listed Properties`} total={30} />
          <StatCard title={`Unlisted Properties`} total={20} />
        </SimpleGrid>
      </Box>
      {/* recent properties */}
      <Box>
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
                <Link color={`primary`} as={ReactLink}>
                  <Text>View All Properties</Text>
                </Link>
              </Flex>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
                <AdminPropertyCard />
                <AdminPropertyCard />
              </SimpleGrid>
            </Box>

            <Box
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
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 4 }}>
            <Box borderRadius={10} bgColor={`dashboardBG`} p={5}>
              <Flex justifyContent={`space-between`} alignItems={`center`}>
                <Heading fontSize={`3xl`}>Reviews</Heading>
                <Text color={`primary`}>See All</Text>
              </Flex>
              <SimpleGrid mt={10} columns={1} gap={3}>
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
              </SimpleGrid>
            </Box>
          </GridItem>
        </TwoColumnLayout>
      </Box>
    </>
  )
}

export default index
