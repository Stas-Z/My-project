import { MutableRefObject, memo, useCallback, useRef } from 'react'

import { useSearchParams } from 'react-router-dom'

import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from '@/widgets/Page'

import cls from './ArticlesPage.module.scss'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'

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

  const [serachParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(serachParams))
  })

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              data-testid="ArticlesPage"
              onScrollEnd={onLoadNextPart}
              className={classNames(cls.articlesPageRedesigned, {}, [
                className,
              ])}
              parentRef={parentRef}
              saveScroll
            >
              <ArticleInfiniteList
                onLoadNextPart={onLoadNextPart}
                parentRef={undefined}
                virtualized
              />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page
          data-testid="ArticlesPage"
          onScrollEnd={onLoadNextPart}
          className={classNames(cls.articlesPage, {}, [className])}
          parentRef={parentRef}
          saveScroll
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList
            onLoadNextPart={onLoadNextPart}
            parentRef={parentRef}
            virtualized
          />
          <ArticlePageGreeting />
        </Page>
      }
    />
  )

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  )
}
export default memo(ArticlesPage)
