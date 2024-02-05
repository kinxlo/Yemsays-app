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
          width={`10rem`}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1683369127/project-yemsays/Group_86_dr3rfv.png`}
        />
      </Link>
    </Center>
  )
}

export default SidebarBrand
