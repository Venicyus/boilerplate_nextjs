import { Dispatch, SetStateAction, useState } from 'react'

export interface AppStore {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const useAppStore = (): AppStore => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return { isLoading, setIsLoading }
}

export default useAppStore
