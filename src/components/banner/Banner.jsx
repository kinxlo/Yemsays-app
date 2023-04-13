import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useGetBannerMutation } from '../../pages/admin/dashboard/api/propertiesApiSlice'
import SpinnerComponent from '../feedback/SpinnerComponent'

const Banner = () => {
  // the values displayed on the bannner would be coming from the database , showing a summary of the sales of properties
  const [bannerDetails, setBannerDetails] = useState({})
  const [getBanner, { isLoading }] = useGetBannerMutation()

  useEffect(() => {
    async function BannerDetails() {
      const res = await getBanner()
      setBannerDetails(res.data.data)
    }
    BannerDetails()
  }, [getBanner])
  return (
    <SimpleGrid
      color={`black`}
      bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677765829/project-yemsays/unsplash_75xPHEQBmvA_izjdww.png`}
      bgRepeat={`no-repeat`}
      bgSize={`cover`}
      bgPos={`center`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={`100%`}
      height={`228px`}
      columns={{ base: 2, md: 4 }}
    >
      <Box textAlign={`center`}>
        {isLoading ? (
          <SpinnerComponent size={`md`} />
        ) : (
          <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
            {bannerDetails?.homeForSale}
          </Text>
        )}
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Homes for sale
        </Text>
      </Box>
      <Box textAlign={`center`}>
        {isLoading ? (
          <SpinnerComponent size={`md`} />
        ) : (
          <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
            {bannerDetails?.landForSale}
          </Text>
        )}
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Lands for sale
        </Text>
      </Box>
      <Box textAlign={`center`}>
        {isLoading ? (
          <SpinnerComponent size={`md`} />
        ) : (
          <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
            {bannerDetails?.sold}
          </Text>
        )}
        <Text fontSize={`xl`} fontWeight={`bold`}>
          Recently sold
        </Text>
      </Box>
      <Box textAlign={`center`}>
        <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
          {isLoading ? (
            <SpinnerComponent size={`md`} />
          ) : (
            <Text fontWeight={`bold`} fontSize={`5xl`} color={`primary`}>
              9.5/10
            </Text>
          )}
        </Text>
        <Text fontSize={`xl`} fontWeight={`bold`}>
          User Satisfaction
        </Text>
      </Box>
    </SimpleGrid>
  )
}

export default Banner
