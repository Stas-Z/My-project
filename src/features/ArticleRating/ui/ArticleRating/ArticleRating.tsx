import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text, TextAlign } from '@/shared/ui/Text'

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

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  if (isError) {
    return (
      <Card max>
        <Text align={TextAlign.CENTER} title={t('An error occurred')} />
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
