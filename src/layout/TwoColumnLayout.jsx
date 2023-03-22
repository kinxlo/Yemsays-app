import { Grid } from '@chakra-ui/react'
import React from 'react'

// eslint-disable-next-line react/prop-types
const TwoColumnLayout = ({ children }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(12, 1fr)' }}
      gap={6}
    >
      {children}
    </Grid>
  )
}

export default TwoColumnLayout
