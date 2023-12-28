import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from '@/entities/Article'
import { ArticleComments } from '@/features/ArticleComments'
import { ArticleRecommendationsList } from '@/features/ArticleDetailsRecommendations'
import { ArticleRating } from '@/features/ArticleRating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'

import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('translation-articles')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </Page>
    )
  }

  return (
    <Page
      className={classNames(cls.articleDetailsPage, {}, [className])}
      saveScroll
    >
      <VStack gap="16" max align="unset">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleComments id={id} />
      </VStack>
    </Page>
  )
}
export default memo(ArticleDetailsPage)
