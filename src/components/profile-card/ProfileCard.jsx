import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProfileCard = () => {
  return (
    <Card>
      <CardBody p={0}>
        <Image
          className='cc-img-fluid'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678011321/project-yemsays/Rectangle_38_z8dfan.png`}
        />
      </CardBody>
      <CardFooter
        display={`flex`}
        flexDir={`column`}
        alignItems={`center`}
        bgColor={`#F5D9BE`}
      >
        <Text fontSize={`2xl`} fontWeight={700}>
          Olakunle Olayemi
        </Text>
        <Text color={`primary`}>Managing Director</Text>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
