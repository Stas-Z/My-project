import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Input } from '@/shared/ui/deprecated/Input'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './CommentFormDeprecated.module.scss'
import {
  getCommentFormError,
  getCommentFormText,
} from '../../../model/selectors/commentFormSelectors'
import { commentFormActions } from '../../../model/slice/commentFormSlice'
import { CommentFormProps } from '../CommentForm'

export const CommentFormDeprecated = memo((props: CommentFormProps) => {
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
      <VStack max className={classNames('', {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    )
  }

  return (
    <HStack
      data-testid="CommentForm"
      justify="between"
      max
      className={classNames(cls.commentForm, {}, [className])}
    >
      <Input
        data-testid="CommentForm.Input"
        className={cls.input}
        placeholder={t('Leave comment')}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        onClick={onSendHandler}
        theme={ButtonTheme.OUTLINE}
        data-testid="CommentForm.Button"
      >
        {t('Submit')}
      </Button>
    </HStack>
  )
})
