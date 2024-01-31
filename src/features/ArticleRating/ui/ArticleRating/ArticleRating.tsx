import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading, isError } = useGetArticleRating({
    userId: userData?.id ?? '',
    articleId,
  })

  const rating = data?.[0]

  const [rateArticleMutation] = useRateArticle()

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          rate: starsCount,
          userId: userData?.id ?? '',
          feedback,
        })
      } catch (error) {
        console.log(error)
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  )

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback)
    },
    [handleRateArticle],
  )
  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount)
    },
    [handleRateArticle],
  )

  const skeletonRedesigned = (
    <CardRedesigned max>
      <VStack align="center" gap="8">
        <Skeleton width={280} height={28} border="8px" />
        <Skeleton width={192} height={32} border="8px" />
      </VStack>
    </CardRedesigned>
  )

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={skeletonRedesigned}
        off={<SkeletonDeprecated width="100%" height={120} />}
      />
    )
  }

  const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
  })

  if (isError) {
    return (
      <Card max>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text align="center" title={t('An error occurred')} />}
          off={
            <TextDeprecated
              align={TextAlign.CENTER}
              title={t('An error occurred')}
            />
          }
        />
      </Card>
    )
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('Do you like the article')}
      feedbackTitle={t('Please leave your feedback')}
      hasFeedback
    />
  )
}

export default memo(ArticleRating)
