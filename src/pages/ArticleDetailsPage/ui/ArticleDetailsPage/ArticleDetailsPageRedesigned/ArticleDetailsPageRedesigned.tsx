import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleComments } from '@/features/ArticleComments'
import { ArticleRating } from '@/features/ArticleRating'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'

import { ArticleAdditionalInfoContainer } from '../../ArticleAdditionalInfoContainer/ArticleAdditionalInfoContainer'
import { ArticleDetailsContainer } from '../../ArticleDetailsContainer/ArticleDetailsContainer'
import { ArticleDetailsPageProps } from '../ArticleDetailsPage'

export const ArticleDetailsPageRedesigned = (
  props: ArticleDetailsPageProps,
) => {
  const { className } = props
  const { t } = useTranslation('translation-articles')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        {t('Article not found')}
      </Page>
    )
  }

  return (
    <StickyContentLayout
      content={
        <Page className={classNames('', {}, [className])} saveScroll>
          <VStack gap="16" max align="unset">
            <ArticleDetailsContainer />
            <ArticleRating articleId={id} />
            {/* <ArticleRecommendationsList /> */}
            <ArticleComments id={id} />
          </VStack>
        </Page>
      }
      right={<ArticleAdditionalInfoContainer />}
    />
  )
}
