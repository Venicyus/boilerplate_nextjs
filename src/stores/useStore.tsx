import { Context, createContext, ReactNode, useContext } from 'react'
import useAppStore, { AppStore } from './useAppStore'

interface Store {
  appStore: AppStore
}

const Context = createContext<Store>(null)

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const appStore = useAppStore()

  return <Context.Provider value={{ appStore }}>{children}</Context.Provider>
}

export const useStore = (): Store => useContext(Context)
