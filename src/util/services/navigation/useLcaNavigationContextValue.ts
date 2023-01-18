import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export declare type LcaRoute = {
  path: string
  routeName: string
  rootElement: any
  allowNestedRoutes?: boolean
}
type LcaNavigationHook = {
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  currentRouteName: string
  routes: LcaRoute[]
}
export type LcaNavigationProps = {
  initialRoutes?: LcaRoute[]
}

export const useLcaNavigationContextValue = ({ initialRoutes = [] }: LcaNavigationProps): LcaNavigationHook => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const [currentRouteName, setCurrentRouteName] = useState('')

  const { pathname } = useLocation()

  const routes: LcaRoute[] = initialRoutes

  useEffect(() => {
    setCurrentRouteName(routes.find((route) => route.path === pathname)?.routeName ?? '')
  }, [pathname])

  return { currentRouteName, drawerOpen, routes, setDrawerOpen }
}
