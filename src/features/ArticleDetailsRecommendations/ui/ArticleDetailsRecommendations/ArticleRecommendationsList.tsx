import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleRecommendationsList.module.scss'
import { useArticleRecommendationsList } from '../../api/ArticleRecommendationApi'

export interface ArticleRecommendationsListProps {
  className?: string
}

const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation('translation-articles')

  const {
    isLoading,
    data: recommends = [],
    error,
  } = useArticleRecommendationsList(4)

  if (error) {
    return (
      <div
        className={classNames(cls.articleRecommendationsList, {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text
              align="center"
              title={t('An error occurred while loading the recommendations')}
            />
          }
          off={
            <TextDeprecated
              align={TextAlign.CENTER}
              title={t('An error occurred while loading the recommendations')}
            />
          }
        />
      </div>
    )
  }

  return (
    <div
      data-testid="ArticleRecommendationsList"
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.articleRecommendationsListRedesigned,
          off: () => cls.articleRecommendationsList,
        }),
        {},
        [className],
      )}
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Text
            size="l"
            className={cls.commentTitle}
            title={t('We recommend')}
            bold
          />
        }
        off={
          <TextDeprecated
            size={TextSize.L}
            className={cls.commentTitle}
            title={t('You may also like')}
          />
        }
      />

      <ArticleList
        articles={recommends}
        isLoading={isLoading}
        className={cls.recommends}
        target="_blank"
      />
    </div>
  )
}

export default memo(ArticleRecommendationsList)
