import { Suspense, lazy } from 'react'
import { ArticleRecommendationsListProps } from './ArticleRecommendationsList'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

const ArticleRecommendationsListLazy = lazy(
  () => import('./ArticleRecommendationsList'),
)

export const ArticleRecommendationsListAsync = (
  props: ArticleRecommendationsListProps,
) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRecommendationsListLazy {...props} />
    </Suspense>
  )
}
