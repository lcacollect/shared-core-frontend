import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { LcaNavigationProps, useLcaNavigationContextValue } from './useLcaNavigationContextValue'

const LcaNavigationContext = createContext<ReturnType<typeof useLcaNavigationContextValue>>({
  currentRouteName: '',
  drawerOpen: false,
  routes: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerOpen: () => {},
})

export const LcaNavigationContextProvider: FC<PropsWithChildren<LcaNavigationProps>> = ({
  children,
  initialRoutes = [],
}) => {
  const value = useLcaNavigationContextValue({ initialRoutes })

  return <LcaNavigationContext.Provider value={value}>{children}</LcaNavigationContext.Provider>
}

export const useLcaNavigation = () => useContext(LcaNavigationContext)
