import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react'

// eslint-disable-next-line react/prop-types
const EditImgOverlay = ({ size, removeText }) => {
  return (
    <Center
      w={`100%`}
      h={`100%`}
      pos={`absolute`}
      top={`50%`}
      left={`50%`}
      transform={`translate(-50%, -50%)`}
      fontSize={size || `4rem`}
      bgColor={`#00000090`}
    >
      <Center flexDir={`column`}>
        <Icon icon={`material-symbols:photo-camera-outline`} />
        <Text display={removeText ? `none` : `block`} textAlign={`center`}>
          Click to change video
        </Text>
      </Center>
    </Center>
  )
}

export default EditImgOverlay
