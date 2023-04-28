import { createContext, useContext } from 'react'

export interface Settings {
  domainName: string | null
  projectStageList: string | string[] | null
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
