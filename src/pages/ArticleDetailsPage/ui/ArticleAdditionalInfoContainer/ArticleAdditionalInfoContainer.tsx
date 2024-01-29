import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticlesEdit } from '@/shared/const/router'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'

import cls from './ArticleAdditionalInfoContainer.module.scss'

export const ArticleAdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData)

  const navigate = useNavigate()

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticlesEdit(article.id))
    }
  }, [article, navigate])

  if (!article) {
    return (
      <Card border="round" className={cls.card} padding="24">
        <VStack gap="32">
          <HStack gap="8">
            <Skeleton height={32} width={32} border="50%" />
            <Skeleton height={22} width={137} border="8px" />
          </HStack>
          <Skeleton height={40} width={147} border="20px" />
          <Skeleton height={22} width={123} border="8px" />
        </VStack>
      </Card>
    )
  }
  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  )
})
