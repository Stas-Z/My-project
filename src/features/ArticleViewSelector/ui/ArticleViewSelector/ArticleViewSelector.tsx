import { memo } from 'react'

import { ArticleView } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'

import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated'
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned'

export interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ArticleViewSelectorRedesigned
          className={className}
          view={view}
          onViewClick={onViewClick}
        />
      }
      off={
        <ArticleViewSelectorDeprecated
          className={className}
          view={view}
          onViewClick={onViewClick}
        />
      }
    />
  )
})
