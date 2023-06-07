import { ArticleDetails } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetailsComments } from 'widgets/ArticleDetailsComments'
import { ArticleRecommendationsList } from 'widgets/ArticleDetailsRecommendations'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

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
        <ArticleRecommendationsList />
        <ArticleDetailsComments />
      </VStack>
    </Page>
  )
}
export default memo(ArticleDetailsPage)
