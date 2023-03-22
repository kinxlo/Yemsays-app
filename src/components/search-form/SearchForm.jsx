import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'
import { IoOptionsOutline } from 'react-icons/io5'

const SearchForm = () => {
  return (
    <Box
      maxW={`944px`}
      margin={`auto`}
      display={`flex`}
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Flex
        justifyContent={`space-between`}
        color={`primary`}
        w={`320px`}
        height={`50px`}
        borderTopEndRadius={50}
        borderTopStartRadius={50}
        textAlign={`center`}
        overflow={`hidden`}
      >
        <Button
          w={`50%`}
          height={`100%`}
          borderRadius={0}
          bgColor={`black`}
          _focus={{ bgColor: `primary`, color: `white` }}
          fontSize={`lg`}
          p={`1.9rem`}
        >
          Land
        </Button>
        <Button
          w={`50%`}
          height={`100%`}
          borderRadius={0}
          bgColor={`black`}
          _focus={{ bgColor: `primary`, color: `white` }}
          fontSize={`lg`}
          p={`1.9rem`}
        >
          Houses
        </Button>
      </Flex>

      <Box bgColor={`black`} color={`white`} p={5} borderRadius={15}>
        <SimpleGrid columns={12} gap={5}>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel color={`textLight`}>Location</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='Palmgroove, Lagos'
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl color={`textLight`}>
              <FormLabel>Land Type</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='Deluxe'
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <FormControl color={`textLight`}>
              <FormLabel>Average Price</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='$1000 - $5000'
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={3}>
            <Flex
              w={`100%`}
              h={`100%`}
              justifyContent={`space-around`}
              alignItems={`center`}
              gap={5}
            >
              <Box>
                <IoOptionsOutline size={`1.5rem`} />
              </Box>
              <Button w={`180px`} h={`60px`} bgColor={`primary`}>
                Search
              </Button>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default SearchForm
