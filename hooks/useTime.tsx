import { useEffect, useState } from 'react'

export const useTime = (interval: number): number | undefined => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if(time == null) {
      setTime(Date.now())
      return
    }

    const timeoutId = setTimeout(() => setTime(Date.now()), interval)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [time]) // eslint-disable-line react-hooks/exhaustive-deps

  return time
}