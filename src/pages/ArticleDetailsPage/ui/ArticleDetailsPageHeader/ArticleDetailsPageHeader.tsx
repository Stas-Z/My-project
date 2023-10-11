import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticles, getRouteArticlesEdit } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'

import { getCanEditArticle } from '../../model/selectors/articleDetailsPageSelectors'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('translation-articles')
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticlesEdit(article.id))
      }
    }, [article, navigate])

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Go back')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t('Edit page')}
          </Button>
        )}
      </HStack>
    )
  },
)
