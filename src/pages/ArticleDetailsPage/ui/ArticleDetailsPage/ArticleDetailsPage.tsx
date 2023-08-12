import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleComments } from '@/features/ArticleComments'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/ArticleDetailsRecommendations'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/ArticleRating'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('articles')
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
