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
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoOptionsOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import {
  useListHousePropertiesMutation,
  useListLandPropertiesMutation,
  useSearchPropertyMutation,
} from '../../pages/admin/dashboard/api/propertiesApiSlice'
import { selectPropertyState } from '../../pages/admin/dashboard/api/propertiesSlice'

const SearchForm = () => {
  const [listLandProperties] = useListLandPropertiesMutation()
  const [listHouseProperties] = useListHousePropertiesMutation()
  const [searchProperty, { isLoading }] = useSearchPropertyMutation()
  const propertyState = useSelector(selectPropertyState)
  const { handleSubmit, register } = useForm()
  const dispatch = useDispatch()

  // console.log(args_1, args_2)

  const showLandProperties = useCallback(async () => {
    await listLandProperties().unwrap()
  }, [listLandProperties])

  const showHouseProperties = useCallback(async () => {
    await listHouseProperties().unwrap()
  }, [listHouseProperties])

  const handleLandBtnClick = () => {
    // setBtnState({ houseBtn: false, landBtn: true })
    showLandProperties()
    dispatch({
      type: `properties/changePropertyState`,
      payload: true,
    })
  }
  const handleHouseBtnClick = () => {
    // setBtnState({ houseBtn: true, landBtn: false })
    showHouseProperties()
    dispatch({ type: `properties/changePropertyState`, payload: false })
  }

  const handleSearchForm = async (data) => {
    console.log(data)
    const formData = {
      location: data.location,
      property: propertyState.isLand ? `Land` : `house`,
      averagePrice: data.averagePrice,
      propertyType: data.propertyType,
    }

    console.log(formData)
    try {
      const res = await searchProperty(formData).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

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
          onClick={handleLandBtnClick}
          w={`50%`}
          height={`100%`}
          borderRadius={0}
          bgColor={propertyState.isLand ? `primary` : `black`}
          color={propertyState.isLand ? `white` : `primary`}
          // _focus={{ bgColor: `primary`, color: `white` }}
          fontSize={`lg`}
          p={`1.9rem`}
        >
          Land
        </Button>
        <Button
          onClick={handleHouseBtnClick}
          w={`50%`}
          height={`100%`}
          borderRadius={0}
          bgColor={!propertyState.isLand ? `primary` : `black`}
          color={!propertyState.isLand ? `white` : `primary`}
          // _focus={{ bgColor: `primary`, color: `white` }}
          fontSize={`lg`}
          p={`1.9rem`}
        >
          Houses
        </Button>
      </Flex>

      <Box
        as='form'
        onSubmit={handleSubmit(handleSearchForm)}
        bgColor={`black`}
        color={`white`}
        p={5}
        borderRadius={15}
      >
        <SimpleGrid columns={12} gap={5}>
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel color={`textLight`}>Location</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='Palmgroove, Lagos'
                {...register(`location`)}
              />
            </FormControl>
          </GridItem>
          <GridItem hidden={!propertyState.isLand} colSpan={3}>
            <FormControl color={`textLight`}>
              <FormLabel>Land Type</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='Deluxe'
                {...register(`propertyType`)}
              />
            </FormControl>
          </GridItem>
          <GridItem hidden={propertyState.isLand} colSpan={3}>
            <FormControl color={`textLight`}>
              <FormLabel>Property Type</FormLabel>
              <Input
                color={`textDark`}
                bgColor={`textLight`}
                type='text'
                placeholder='Deluxe'
                {...register(`propertyType`)}
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
                {...register(`averagePrice`)}
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
              <Button
                isLoading={isLoading}
                loadingText='Searching...'
                type={`submit`}
                w={`180px`}
                h={`60px`}
                bgColor={`primary`}
              >
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
