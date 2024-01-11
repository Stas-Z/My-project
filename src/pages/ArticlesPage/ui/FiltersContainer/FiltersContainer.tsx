import { memo } from 'react'

import { ArticlesFilters } from '@/widgets/ArticlesFilters'

import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface FiltersContainerProps {
  className?: string
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props
  const {
    type,
    sort,
    search,
    order,
    onChangeView,
    onChangeSort,
    onChangeType,
    onChangeSearch,
    onChangeOrder,
  } = useArticleFilters()

  return (
    <ArticlesFilters
      className={className}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      order={order}
      search={search}
      sort={sort}
      type={type}
    />
  )
})
