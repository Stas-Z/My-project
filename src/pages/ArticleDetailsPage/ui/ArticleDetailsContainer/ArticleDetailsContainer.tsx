import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'

interface ArticleDetailsContainerProps {
  className?: string
}

export const ArticleDetailsContainer = memo(
  (props: ArticleDetailsContainerProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()

    return (
      <Card max className={className} padding="0">
        <ArticleDetails id={id} />
      </Card>
    )
  },
)
