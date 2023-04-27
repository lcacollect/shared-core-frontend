import { createContext, useContext } from 'react'

const SettingsContext = createContext({})

type SettingsProps = {
  children: React.ReactNode
  settings: object
}

const SettingsContextProvider = ({ children, settings }: SettingsProps) => {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>
}

const useSettingsContext = () => {
  const context = useContext(SettingsContext)

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider')
  }

  return context
}

export { SettingsContextProvider, useSettingsContext }
