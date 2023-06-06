import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import cls from './ArticleDetailsPageHeader.module.scss'
import { getCanEditArticle } from '../../model/selectors/articleDetailsPageSelectors'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
      navigate(RoutPath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
      navigate(`${RoutPath.article_details}${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
      <div
        className={classNames(cls.articleDetailsPageHeader, {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Go back')}
        </Button>
        {canEdit && (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Edit page')}
          </Button>
        )}
      </div>
    )
  },
)
