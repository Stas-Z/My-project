import { useMemo } from 'react'

import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import { ArticleView } from '../consts/articleConsts'

interface useArticleListSkeletonProps {
  classname?: string
  view: ArticleView
}

export const useArticleListSkeletons = (props: useArticleListSkeletonProps) => {
  const { view, classname } = props

  const articleSkeletons = useMemo(
    () => new Array(view === ArticleView.GRID ? 6 : 2).fill(null),
    [view],
  )

  return useMemo(
    () =>
      articleSkeletons.map((item, index) => (
        <ArticleListItemSkeleton
          className={classname}
          // eslint-disable-next-line
          key={index}
          view={view}
        />
      )),
    [articleSkeletons, classname, view],
  )
}
