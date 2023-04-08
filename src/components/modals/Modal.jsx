/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useGetPropertyByIDMutation,
  useListPropertyMutation,
} from '../../pages/admin/dashboard/api/propertiesApiSlice'

const FeedbackModal = ({ isOpen, onClose, action, id, handleSubmit }) => {
  const [content, setContent] = useState(null)
  const [propertyID, setPropertyID] = useState(null)
  const [isSuccess, setSuccess] = useState(false)
  const [getPropertyByID] = useGetPropertyByIDMutation()
  const [listProperty, { isLoading }] = useListPropertyMutation()
  const location = useLocation()

  useEffect(() => {
    if (!id) {
      setPropertyID(location.pathname.split(`/`)[3])
    } else {
      setPropertyID(id)
    }
  }, [id, location.pathname])

  const showSuccessMessage = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 10000) //use the close function on the modal
  }

  const getPropertiesDetails = useCallback(async () => {
    await getPropertyByID(propertyID).unwrap()
  }, [getPropertyByID, propertyID])

  const setListedStatus = useCallback(
    async (status) => {
      const res = await listProperty({
        id: propertyID,
        body: { status: status },
      }).unwrap()
      if (res.success) {
        getPropertiesDetails()
        showSuccessMessage()
      }
    },
    [getPropertiesDetails, listProperty, propertyID]
  )

  const handleClick = () => {
    action === `addProperty` ? handleSubmit() : setListedStatus(action)
  }

  useEffect(() => {
    switch (action) {
      case `unlisted`:
        setContent({
          title1: `Are you sure you want to unlist this property?`,
          title2: `Property Unlisted Successfully!`,
          description: `The property has been unlisted and moved to the unlisted folder. Kindly click continue to view unlisted properties.`,
        })
        break
      case `listed`:
        setContent({
          title1: `Are you sure you want to list this property?`,
          title2: `Property listed Successfully!`,
          description: `The property has been listed and moved to the Listed folder. Kindly click continue to view unlisted properties.`,
        })
        break
      case `unsold`:
        setContent({
          title1: `Are you sure you want to mark this property as unsold?`,
          title2: `Property Marked As Unsold Successfully!`,
          description: `The property has been Marked as unsold successfully. Kindly click continue to view other sold properties`,
        })
        break
      case `sold`:
        setContent({
          title1: `Are you sure you want to mark this property as sold?`,
          title2: `Property Marked As Sold Successfully!`,
          description: `The property has been Marked as sold successfully. Kindly click continue to view other sold properties`,
        })
        break
      case `addProperty`:
        setContent({
          title1: `Are you sure you want to save this page?`,
          title2: `Property Added Successfully!`,
          description: `The new property has been added and moved to the Unlisted folder. To list property, go to Unlisted folder.`,
        })
        break

      default:
        break
    }
  }, [action])

  return (
    <>
      <Modal isOpen={isOpen} size={{ base: `full`, md: `xl` }} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor={`transparent`}
          borderRadius={20}
          overflow={`hidden`}
        >
          <ModalBody
            display={`flex`}
            flexDir={`column`}
            textAlign={`center`}
            justifyContent={`center`}
            padding={{ md: 16 }}
            bgColor={`bgBlack`}
            color={`white`}
          >
            <Heading fontSize={`3xl`} mb={10}>
              {isSuccess ? content.title2 : content?.title1}
            </Heading>
            <Text hidden={!isSuccess} fontSize={`lg`}>
              {content?.description}
            </Text>
            <Stack mt={5} p={10} gap={5}>
              <Button
                onClick={handleClick}
                isLoading={isLoading}
                loadingText={`hold on...`}
                variant={`solid`}
                colorScheme={`orange`}
                hidden={isSuccess}
                height={`50px`}
              >
                Yes
              </Button>
              <Button
                onClick={onClose}
                variant={`outline`}
                colorScheme={`orange`}
                hidden={isSuccess}
                height={`50px`}
              >
                No
              </Button>
              <Button
                onClick={onClose}
                hidden={!isSuccess}
                variant={`solid`}
                colorScheme={`orange`}
                height={`50px`}
              >
                Continue
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FeedbackModal
