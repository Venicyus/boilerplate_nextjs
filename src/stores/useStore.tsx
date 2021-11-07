import { createContext, ReactNode, useContext } from 'react'
import useTime, { TimeStore } from './useTimeStore'

interface Store {
  time: TimeStore
}

const Context = createContext<Store>(null)

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const time = useTime()

  return <Context.Provider value={{ time }}>{children}</Context.Provider>
}

export const useStore = (): Store => useContext(Context)
