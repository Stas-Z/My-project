import {
  FC,
  HTMLAttributeAnchorTarget,
  MutableRefObject,
  memo,
  useEffect,
  useState,
} from 'react'

import { useTranslation } from 'react-i18next'

import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Virtualize } from '@/shared/ui/redesigned/Virtualize'

import cls from './ArticleList.module.scss'
import { ArticleView } from '../../model/consts/articleConsts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart?: () => void
  virtualized?: boolean
  parentRef?: MutableRefObject<HTMLDivElement>
}

const ItemContainerComp: FC<{ index: number }> = ({ index }) => (
  <div className={cls.itemContainer}>
    <ArticleListItemSkeleton
      key={index}
      view={ArticleView.GRID}
      className={cls.card}
    />
  </div>
)

const getArticleSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 4 : 2).fill(0).map((item, index) => (
    // eslint-disable-next-line
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
    target,
    onLoadNextPart,
    virtualized,
    parentRef,
  } = props
  const { t } = useTranslation('translation-articles')
  const [selectedArticleId, setSelectedArticleId] = useState(-1)

  const getSkeletons = () => (
    <ArticleListItemSkeleton className={cls.card} view={view} />
  )

  useEffect(() => {
    const paged =
      sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 0
    setSelectedArticleId(+paged)
  }, [isLoading, view])

  const renderArticle = (index: number, article: Article) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        className={cls.card}
        key={article.id}
        target={target}
        index={index}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Articles not found')} />
      </div>
    )
  }

  if (virtualized) {
    return (
      <div
        className={classNames(cls.articleList, {}, [className, cls[view]])}
        data-testid="ArticleList"
      >
        <Virtualize
          data={articles}
          renderNode={renderArticle}
          isLoading={isLoading}
          parentRef={parentRef}
          lastIndex={selectedArticleId}
          onScrollEnd={onLoadNextPart}
          renderSkeleton={getSkeletons}
          view={view}
          placeholder={ItemContainerComp}
        />
        <HStack gap="32" wrap="wrap">
          {isLoading && getArticleSkeletons(view)}
        </HStack>
      </div>
    )
  }

  return (
    <HStack
      wrap="wrap"
      gap="32"
      className={classNames(cls.articleList, {}, [className, cls[view]])}
      data-testid="ArticleList"
    >
      {!isLoading && articles.length > 0
        ? articles.map((item, index) => renderArticle(index, item))
        : null}
      {isLoading && getArticleSkeletons(view)}
    </HStack>
  )
})
