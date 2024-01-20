import { ReactElement } from 'react'

import { FeatureFlags } from '@/shared/types/featureFlags'

import { getFeatureFlag } from '../../lib/setGetFeatures'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { feature, off, on } = props
  if (__PROJECT__ === 'storybook') {
    const test = localStorage.getItem('isArticleRatingEnabled')
    if (test) {
      return on
    }
  }

  if (getFeatureFlag(feature)) {
    return on
  }
  return off
}
