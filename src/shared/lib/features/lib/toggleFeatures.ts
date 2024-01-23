import { FeatureFlags } from '@/shared/types/featureFlags'

import { getFeatureFlag } from './setGetFeatures'

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export function toggleFeatures<T>({
  name,
  off,
  on,
}: ToggleFeaturesOptions<T>): T {
  if (__PROJECT__ === 'storybook') {
    const test = localStorage.getItem('isAppRedesigned')
    if (test) {
      return on()
    }
  }
  if (getFeatureFlag(name)) {
    return on()
  }
  return off()
}
