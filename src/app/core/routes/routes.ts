import Home from 'app/core/pages/home'

import AddNewCoin from '../pages/AddNewCoin'
import { AppRoute } from './types'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/new-coin', exact: true, component: AddNewCoin },
  { path: '/private', exact: true, component: Home, isPrivate: true },
]
