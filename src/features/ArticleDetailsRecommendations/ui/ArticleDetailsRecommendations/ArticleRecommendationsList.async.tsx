import { Suspense, lazy } from 'react'

import { toggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

import { ArticleRecommendationsListProps } from './ArticleRecommendationsList'

const ArticleRecommendationsListLazy = lazy(
  () => import('./ArticleRecommendationsList'),
)

export const ArticleRecommendationsListAsync = (
  props: ArticleRecommendationsListProps,
) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRecommendationsListLazy {...props} />
    </Suspense>
  )
}
