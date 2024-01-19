import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ArticleListItemSkeletonDeprecated } from './ArticleListItemDeprecated/ArticleListItemSkeletonDeprecated'
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemRedesigned/ArticleListItemSkeletonRedesigned'
import { ArticleView } from '../../model/consts/articleConsts'

export interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemSkeletonRedesigned {...props} />}
        off={<ArticleListItemSkeletonDeprecated {...props} />}
      />
    )
  },
)
