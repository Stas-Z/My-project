import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDetailsComments } from 'widgets/ArticleDetailsComments'
import { ArticleDetails } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate(RoutPath.articles)
  }, [navigate])

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </Page>
    )
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Go back')}
      </Button>
      <ArticleDetails id={id} />
      <ArticleDetailsComments />
    </Page>
  )
}
export default memo(ArticleDetailsPage)
