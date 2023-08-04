import { ArticleList } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { useArticleRecommendationsList } from '../../api/ArticleRecommendationApi'
import cls from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation('articles')

    const {
      isLoading,
      data: recommends,
      error,
    } = useArticleRecommendationsList(4)

    if (error) {
      return (
        <div
          className={classNames(cls.articleRecommendationsList, {}, [
            className,
          ])}
        >
          <Text
            align={TextAlign.CENTER}
            title={t('An error occurred while loading the recommendations')}
          />
        </div>
      )
    }

    if (!recommends) {
      return null
    }

    return (
      <div
        className={classNames(cls.articleRecommendationsList, {}, [className])}
      >
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('You may also like')}
        />
        <ArticleList
          articles={recommends}
          isLoading={isLoading}
          className={cls.recommends}
          target="_blank"
        />
      </div>
    )
  },
)