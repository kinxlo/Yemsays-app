import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React from 'react'
import EditImgOverlay from '../../editImgOverlay/EditImgOverlay'

const SalePersonEditForm = () => {
  return (
    <Card
      bgColor={`transparent`}
      color={`white`}
      border={`1px solid #343434`}
      borderRadius={7}
      mb={10}
    >
      <CardBody p={10}>
        <Flex
          flexDir={`column`}
          flex='1'
          gap={10}
          alignItems='center'
          flexWrap='wrap'
        >
          <Avatar
            name='Segun Adebayo'
            src='https://bit.ly/sage-adebayo'
            size={`2xl`}
            overflow={`hidden`}
            pos={`relative`}
          >
            <EditImgOverlay removeText size={`2rem`} />
          </Avatar>

          <FormControl display={`flex`} flexDir={`column`} gap={5}>
            <Box>
              <FormLabel color={`textGrey`}>Support In-Charge</FormLabel>
              <Input
                //   fontSize={`lg`}
                borderRadius={15}
                size={`lg`}
                placeholder='Ezra Aduramigba'
                _placeholder={{ fontSize: `xl` }}
              />
            </Box>
            <Box>
              <FormLabel color={`textGrey`}>WhatsApp Contact Details</FormLabel>
              <Input
                //   fontSize={`lg`}
                borderRadius={15}
                size={`lg`}
                placeholder='08118951879'
                _placeholder={{ fontSize: `xl` }}
              />
            </Box>
            <Box>
              <FormLabel color={`textGrey`}>Call Contact Details</FormLabel>
              <Input
                //   fontSize={`lg`}
                borderRadius={15}
                size={`lg`}
                placeholder='08130054558'
                _placeholder={{ fontSize: `xl` }}
              />
            </Box>
          </FormControl>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SalePersonEditForm
