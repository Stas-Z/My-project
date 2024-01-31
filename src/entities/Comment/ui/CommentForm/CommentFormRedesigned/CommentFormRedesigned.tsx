import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import commnetButton from '@/shared/assets/icons/comment_button.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './CommentFormRedesigned.module.scss'
import {
  getCommentFormError,
  getCommentFormText,
} from '../../../model/selectors/commentFormSelectors'
import { commentFormActions } from '../../../model/slice/commentFormSlice'
import { CommentFormProps } from '../CommentForm'

export const CommentFormRedesigned = memo((props: CommentFormProps) => {
  const { className, onSendComment, isLoading } = props
  const { t } = useTranslation()
  const text = useSelector(getCommentFormText)
  const error = useSelector(getCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(commentFormActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text)
    onCommentTextChange('') // Очищаем инпут
  }, [onCommentTextChange, onSendComment, text])

  if (isLoading) {
    return (
      <HStack className={cls.commentForm} max>
        <Skeleton width="100%" height={32} border="16px" />
      </HStack>
    )
  }

  return (
    <HStack
      data-testid="CommentForm"
      justify="between"
      max
      className={classNames(cls.commentForm, {}, [className])}
      gap="16"
    >
      <Input
        data-testid="CommentForm.Input"
        className={cls.input}
        placeholder={t('Write a comment')}
        value={text}
        onChange={onCommentTextChange}
        size="s"
      />
      <Icon
        clickable
        onClick={onSendHandler}
        Svg={commnetButton}
        data-testid="CommentForm.Button"
      />
    </HStack>
  )
})
