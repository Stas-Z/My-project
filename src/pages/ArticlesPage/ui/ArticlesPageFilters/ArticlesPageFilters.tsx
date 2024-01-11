import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'

import cls from './ArticlesPageFilters.module.scss'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation('translation-articles')
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
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSelectorContainer />
      </div>
      <Card className={cls.search}>
        <Input
          data-testid="ArticlesPageFilters.Input"
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Search')}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
})
