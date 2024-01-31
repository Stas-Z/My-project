import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { RatingCardDeprecated } from './RatingCardDeprecated/RatingCardDeprecated'
import { RatingCardRedesigned } from './RatingCardRedesigned/RatingCardRedesigned'

export interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<RatingCardRedesigned {...props} />}
      off={<RatingCardDeprecated {...props} />}
    />
  )
})
