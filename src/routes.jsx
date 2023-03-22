import React from 'react'

import { Icon } from '@iconify/react'

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: (
      <Icon
        width={`20px`}
        height={`20px`}
        icon='material-symbols:dashboard-outline'
      />
    ),
  },
  {
    name: 'All Properties',
    layout: '/admin',
    path: '/properties',
    icon: (
      <Icon icon='bi:buildings' width='20px' height='20px' color='inherit' />
    ),
  },
  {
    name: 'Add New Property',
    layout: '/admin',
    path: '/property/new',
    icon: (
      <Icon icon='bi:building-add' width='20px' height='20px' color='inherit' />
    ),
  },
]

export default routes
