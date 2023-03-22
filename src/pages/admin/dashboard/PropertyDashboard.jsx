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
import React from 'react'
import { Icon } from '@iconify/react'
import AdminPropertyCard from '../../../components/admin/propertyCard/AdminPropertyCard'
import BreadCrumbHeader from '../../../components/breadcrumbHeader/BreadCrumbHeader'

const links = [
  { name: `Home`, ref: `/` },
  { name: `properties`, ref: `/properties` },
]

const PropertyDashboard = () => {
  const propertyList_L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (listed) => {
      return (
        <Box key={listed} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed />
        </Box>
      )
    }
  )
  const propertyList_U = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (unlisted) => {
      return (
        <Box key={unlisted} bgColor={`dashboardBG`} p={4} borderRadius={10}>
          <AdminPropertyCard listed={false} />
        </Box>
      )
    }
  )
  const propertyList_S = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((sold) => {
    return (
      <Box key={sold} bgColor={`dashboardBG`} p={4} borderRadius={10}>
        <AdminPropertyCard sold />
      </Box>
    )
  })

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
              flexDir={{ base: `column`, lg: `row` }}
              alignItems={`center`}
              gap={10}
            >
              <Menu>
                <MenuButton
                  px={10}
                  py={7}
                  h={`100%`}
                  transition='all 0.2s'
                  fontSize={{ base: `lg`, lg: `2xl` }}
                  borderRadius={15}
                  _expanded={{ bg: 'primary', color: `white` }}
                  bgColor={`dashboardBG`}
                  color={`primary`}
                  as={Button}
                  rightIcon={
                    <Box mt={-1} ms={5}>
                      <Icon
                        icon={`majesticons:chevron-down-circle`}
                        width={`1.2rem`}
                        height={`1.2rem`}
                      />
                    </Box>
                  }
                >
                  Lands
                </MenuButton>
                <MenuList
                  mt={1}
                  borderColor={`primary`}
                  bgColor={`dashboardBG`}
                  color={`primary`}
                >
                  <MenuItem bgColor={`transparent`}>Land</MenuItem>
                  <MenuItem bgColor={`transparent`}>House</MenuItem>
                </MenuList>
              </Menu>
              <Center
                border={`1px solid #F78214`}
                borderRadius={15}
                color='primary'
                bgColor={`dashboardBG`}
                p={5}
              >
                <Icon icon={`pepicons-pop:refresh`} width={`2rem`} />
              </Center>

              <Box>
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
              </Box>
            </Flex>
          </Flex>

          <TabPanels>
            <TabPanel p={0} my={5}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {propertyList_L}
              </SimpleGrid>
            </TabPanel>
            <TabPanel p={0} my={5}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {propertyList_U}
              </SimpleGrid>
            </TabPanel>
            <TabPanel p={0} my={5}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {propertyList_S}
              </SimpleGrid>
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
