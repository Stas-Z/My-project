import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleSortFiled, ArticleView, ArticleType } from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import {
  ArticleTypeTabs,
  ArticleViewSelector,
} from '@/features/ArticleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types/sort'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true })) // Запрос на сервер при сортировке или поиске
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )
  const onChangeSort = useCallback(
    (newSort: ArticleSortFiled) => {
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )
  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )
  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
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
