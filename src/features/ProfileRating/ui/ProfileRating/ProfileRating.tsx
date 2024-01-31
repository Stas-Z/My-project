import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RatingCard, RatingSkeleton } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi'

interface ProfileRatingProps {
  className?: string
  profileId: string
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading, isError } = useGetProfileRating({
    userId: userData?.id ?? '',
    profileId,
  })
  const rating = data?.[0]

  const [rateProfileMutation] = useRateProfile()

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          profileId,
          rate: starsCount,
          userId: userData?.id ?? '',
          feedback,
        })
      } catch (error) {
        console.log(error)
      }
    },
    [profileId, rateProfileMutation, userData?.id],
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
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={RatingSkeleton}
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
      title={t('How do you like this user')}
      feedbackTitle={t('Please leave your feedback')}
      hasFeedback
    />
  )
})
