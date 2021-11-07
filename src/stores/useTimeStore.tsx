import { useEffect, useState } from 'react'

export interface TimeStore {
  value: number
  isInProgress: boolean
  onPlay: () => void
  onStop: () => void
  onReset: () => void
}

const initialState = new Date(0, 0, 0).getTime()

const useTime = (): TimeStore => {
  const [value, setValue] = useState<number>(initialState)
  const [isInProgress, setIsInProgress] = useState<boolean>(false)

  const onPlay = (): void => setIsInProgress(true)
  const onStop = (): void => setIsInProgress(false)
  const onReset = (): void => setValue(initialState)

  useEffect(() => {
    const storage = localStorage.getItem('time')
    if (storage) {
      const time = JSON.parse(storage)
      setValue(time.value)
      setIsInProgress(time.isInProgress)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('time', JSON.stringify({ value, isInProgress }))

    if (isInProgress) {
      const id = setTimeout(() => setValue(value + 1000), 1000)
      return () => clearTimeout(id)
    }
  }, [value, isInProgress])

  return { value, isInProgress, onPlay, onStop, onReset }
}

export default useTime
