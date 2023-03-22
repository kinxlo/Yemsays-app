/* eslint-disable react/prop-types */
import { Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import EditImgOverlay from '../../components/editImgOverlay/EditImgOverlay'

const GridImageLayout = ({ newProperty }) => {
  return (
    <Grid
      h='562px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
      borderRadius={10}
      overflow={`hidden`}
    >
      <GridItem
        rowSpan={{ base: 2, lg: 3 }}
        colSpan={{ base: 3, lg: 2 }}
        bg='dashboardBG'
        pos={`relative`}
      >
        <EditImgOverlay />
        <Image
          display={newProperty ? `none` : `block`}
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678015983/project-yemsays/Rectangle_39_nai5r2.png`}
        />
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} />
        <Image
          display={newProperty ? `none` : `block`}
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678015997/project-yemsays/Rectangle_42_nbonui.png`}
        />
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} />
        <Image
          display={newProperty ? `none` : `block`}
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678015993/project-yemsays/Rectangle_41_ti79nf.png`}
        />
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} />
        <Image
          display={newProperty ? `none` : `block`}
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678015987/project-yemsays/Rectangle_40_iernci.png`}
        />
      </GridItem>
    </Grid>
  )
}

export default GridImageLayout
