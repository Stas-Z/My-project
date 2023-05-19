import { ArticleList } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/articleRecommendationsSelectors'
import { fetchArticleRecommendationsList } from '../../model/services/fetchArticleRecommendationsList/fetchArticleRecommendationsList'
import {
  articleRecommendationsListReducer,
  getArticleRecommendationsList,
} from '../../model/slices/articleRecommendationsListSlice'
import cls from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}
const initialReducers: ReducersList = {
  articleRecommendationsList: articleRecommendationsListReducer,
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const recommends = useSelector(getArticleRecommendationsList.selectAll)
    const recommendsIsLoading = useSelector(getArticleRecommendationsIsLoading)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
      dispatch(fetchArticleRecommendationsList())
    })

    return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div
          className={classNames(cls.articleRecommendationsList, {}, [
            className,
          ])}
        >
          <Text
            size={TextSize.L}
            className={cls.commentTitle}
            title={t('You may also like')}
          />
          <ArticleList
            articles={recommends}
            isLoading={recommendsIsLoading}
            className={cls.recommends}
            target="_blank"
          />
        </div>
      </DynamicModuleLoader>
    )
  },
)
