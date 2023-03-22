import React from 'react'

// Chakra imports
import { Center, Image, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

// Custom components
// import { HorizonLogo } from 'components/icons/Icons'
// import { HSeparator } from 'components/separator/Separator'

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Center align='center' direction='column'>
      <Link as={ReactLink} to={`/`}>
        <Image
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677576945/project-yemsays/Group_86_btjv9i.png`}
        />
      </Link>
    </Center>
  )
}

export default SidebarBrand
