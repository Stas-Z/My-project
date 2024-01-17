import { memo } from 'react'

import { ArticleSortFiled } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'
import { SortOrder } from '@/shared/types/sort'

import { ArticleSortSelectorDeprecated } from './ArticleSortSelectorDeprecated/ArticleSortSelectorDeprecated'
import { ArticleSortSelectorRedesigned } from './ArticleSortSelectorRedesigned/ArticleSortSelectorRedesigned'

export interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortFiled
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortFiled) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ArticleSortSelectorRedesigned
          className={className}
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      }
      off={
        <ArticleSortSelectorDeprecated
          className={className}
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      }
    />
  )
})
