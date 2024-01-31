import { memo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './CommentCardRedesigned.module.scss'
import { CommentCardProps } from '../CommentCard'

export const CommentCardRedesigned = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props
  const { t } = useTranslation()

  const [openComment, setOpenComment] = useState(false)

  const openHandler = () => {
    setOpenComment((prevState) => !prevState)
  }

  if (isLoading) {
    return (
      <HStack
        gap="16"
        align="start"
        max
        data-testid="CommentCard.Loading"
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
      >
        <VStack gap="8" align="center">
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={22} width={48} border="6px" />
        </VStack>
        <Skeleton width="100%" height={60} border="16px" />
      </HStack>
    )
  }
  if (!comment) {
    return null
  }

  return (
    <VStack
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={classNames(cls.commentCard, {}, [className])}
    >
      <HStack gap="16" align="start">
        <AppLink to={getRouteProfile(comment.user.id)}>
          {comment.user.avatar ? (
            <Avatar
              size={30}
              src={comment.user.avatar}
              username={comment.user.username}
              vertical
            />
          ) : null}
        </AppLink>
        <VStack>
          <Text
            className={openComment ? cls.textOpen : cls.text}
            text={comment.text}
          />
          {comment.text.length > 596 && (
            <Button
              onClick={openHandler}
              variant="clear"
              className={openComment ? cls.readMoreOpen : cls.readMore}
            >
              {openComment ? t('Hide') : t('read more')}
            </Button>
          )}
        </VStack>
      </HStack>
    </VStack>
  )
})
