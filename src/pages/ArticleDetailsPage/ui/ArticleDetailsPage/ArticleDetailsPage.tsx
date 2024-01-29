import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ArticleDetailsPageDeprecated } from './ArticleDetailsPageDeprecated/ArticleDetailsPageDeprecated'
import { ArticleDetailsPageRedesigned } from './ArticleDetailsPageRedesigned/ArticleDetailsPageRedesigned'

export interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleDetailsPageRedesigned {...props} />}
      off={<ArticleDetailsPageDeprecated {...props} />}
    />
  )
}
export default memo(ArticleDetailsPage)
