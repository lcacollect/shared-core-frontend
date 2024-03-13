import { createContext, useContext } from 'react'

export interface Settings {
  domainName?: string | null
  projectStages?: string | string[] | null
  defaultValues?: any
  description?: string | null
  displayConfig?: any
  logoUrl?: string | null
  metaFields?: any
  name?: string | null
  url?: string | null
}

const SettingsContext = createContext({} as Settings)

type SettingsProps = {
  children: React.ReactNode
  settings: Settings
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
