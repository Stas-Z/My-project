import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { User } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleAdditionalInfoProps {
  className?: string
  author: User
  createdAt: string
  views: number
  onEdit: () => void
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props
    const { t } = useTranslation('translation-articles')

    return (
      <VStack gap="32" className={classNames('', {}, [className])}>
        <HStack gap="8">
          <Avatar src={author.avatar} size={32} username={author.username} />
          <Text text={createdAt} />
        </HStack>
        <Button onClick={onEdit}>{t('Edit page')}</Button>
        <Text text={t('{{count}} views', { count: views })} />
      </VStack>
    )
  },
)
