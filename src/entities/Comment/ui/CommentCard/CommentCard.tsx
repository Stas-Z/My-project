import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { CommentCardDeprecated } from './CommentCardDeprecated/CommentCardDeprecated'
import { CommentCardRedesigned } from './CommentCardRedesigned/CommentCardRedesigned'
import { Comment } from '../../model/types/comment'

export interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<CommentCardRedesigned {...props} />}
      off={<CommentCardDeprecated {...props} />}
    />
  )
})
