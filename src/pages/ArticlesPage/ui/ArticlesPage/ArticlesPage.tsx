import { ArticleList } from 'entities/Article'
import {
  MutableRefObject, memo, useCallback, useRef,
} from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from 'widgets/Page/Page'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const parentRef = useRef() as MutableRefObject<HTMLDivElement>

  const articles = useSelector(getArticles.selectAll)

  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const [serachParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(serachParams))
  })

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.articlesPage, {}, [className])}
        parentRef={parentRef}
        saveScroll
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
          onLoadNextPart={onLoadNextPart}
          parentRef={parentRef}
          virtualized
        />
      </Page>
    </DynamicModuleLoader>
  )
}
export default memo(ArticlesPage)
