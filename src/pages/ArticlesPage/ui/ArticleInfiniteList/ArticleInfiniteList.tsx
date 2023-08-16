import { MutableRefObject, memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticleList } from '@/entities/Article'
import { Text } from '@/shared/ui/Text'

import cls from './ArticleInfiniteList.module.scss'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors'
import { getArticles } from '../../model/slice/articlesPageSlice'

interface ArticleInfiniteListProps {
  className?: string
  onLoadNextPart?: () => void
  parentRef?: MutableRefObject<HTMLDivElement>
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className, onLoadNextPart, parentRef } = props
  const { t } = useTranslation('articles')

  const articles = useSelector(getArticles.selectAll)

  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  if (error) {
    return (
      <Text
        title={t('An error occurred while loading the articles')}
        className={cls.error}
      />
    )
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
      onLoadNextPart={onLoadNextPart}
      parentRef={parentRef}
      virtualized
    />
  )
})
