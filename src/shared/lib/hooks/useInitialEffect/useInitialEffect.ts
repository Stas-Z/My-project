import { useEffect } from 'react'

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback()
    }
    // useEffect should be called only once when component is mounted
    // eslint-disable-next-line
  }, [])
}
