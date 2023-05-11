import { ArticleList, ArticleView } from 'entities/Article'
import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors'
import cls from './ArticlesPage.module.scss'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlePageSlice'

interface ArticlesPageProps {
  className?: string
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)

  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  })

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  )
}
export default memo(ArticlesPage)
