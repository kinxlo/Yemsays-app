/* eslint-disable react/prop-types */
import { Card, CardBody, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminAuthPageLayout = ({ children, heading }) => {
  return (
    <Center bgColor={`bgBlack`} h={`100vh`}>
      <Card
        borderRadius={10}
        color={`white`}
        bgColor={`dashboardBG`}
        w={`644px`}
        h={{ base: `100%`, md: `initial` }}
      >
        <CardBody px={{ base: 10, lg: 20 }} py={10}>
          <Center flexDir={`column`} gap={5}>
            <Link to={'/'}>
              <img
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677576945/project-yemsays/Group_86_btjv9i.png`}
                alt='logo'
              />
            </Link>
            <Text fontSize={`xl`}>{heading}</Text>
          </Center>
          {children}
        </CardBody>
      </Card>
    </Center>
  )
}

export default AdminAuthPageLayout
