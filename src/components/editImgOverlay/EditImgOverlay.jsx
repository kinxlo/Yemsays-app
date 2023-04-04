/* eslint-disable react/prop-types */
import { Center, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react'

const EditImgOverlay = ({
  size,
  removeText,
  handleClick,
  id,
  isNotEditProperty,
}) => {
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
      hidden={isNotEditProperty}
    >
      <Center onClick={handleClick} flexDir={`column`}>
        <Input hidden id={id} type={`file`} />
        <Icon icon={`material-symbols:photo-camera-outline`} />
        <Text display={removeText ? `none` : `block`} textAlign={`center`}>
          Click to change video
        </Text>
      </Center>
    </Center>
  )
}

export default EditImgOverlay
