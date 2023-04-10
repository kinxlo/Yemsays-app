/* eslint-disable react/prop-types */
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AlertComponent = ({ isOpen, onClose, message, action }) => {
  return (
    <Modal isOpen={isOpen} size={{ base: `full` }} isCentered>
      <ModalOverlay />
      <ModalContent bgColor={`transparent`} overflow={`hidden`}>
        <ModalBody
          display={`flex`}
          flexDir={`column`}
          textAlign={`center`}
          justifyContent={`center`}
          padding={{ md: 16 }}
          color={`white`}
        >
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            color={`black`}
            maxWidth={`40rem`}
            margin={`auto`}
            borderRadius={20}
            py={10}
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              {message.title}
            </AlertTitle>
            <AlertDescription maxWidth='sm'>{message.desc}</AlertDescription>
            <Flex
              hidden={action === `message`}
              width={`100%`}
              mt={5}
              flexDir={`row`}
              alignItems={`center`}
              justifyContent={`center`}
              gap={5}
            >
              <Link to={`/admin/dashboard`}>
                <Button
                  variant={`outline`}
                  colorScheme={`orange`}
                  size={`xl`}
                  px={5}
                >
                  Continue
                </Button>
              </Link>
              <Button
                onClick={onClose}
                colorScheme={`orange`}
                size={`xl`}
                px={5}
              >
                Add another Property
              </Button>
            </Flex>
            <Button
              mt={5}
              hidden={action !== `message`}
              onClick={onClose}
              colorScheme={`orange`}
              size={`xl`}
              px={5}
            >
              Continue
            </Button>
          </Alert>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AlertComponent
