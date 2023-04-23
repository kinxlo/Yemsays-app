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
          boxSize={`5rem`}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1682094985/project-yemsays/New_Logo_fyelao.png`}
        />
      </Link>
    </Center>
  )
}

export default SidebarBrand
