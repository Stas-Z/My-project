import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { CommentForm, CommentList } from '@/entities/Comment'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleComments.module.scss'
import { getArticleCommentsIsLoading } from '../../model/selectors/articleCommentsSelectors'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
  articleCommentsReducer,
  getArticleComment,
} from '../../model/slices/articleCommentsSlice'

interface ArticleCommentsProps {
  className?: string
  id: string
}

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const { className, id } = props
  const { t } = useTranslation('translation-articles')
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComment.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack
        max
        gap="16"
        className={classNames(cls.articleComments, {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text
              size="l"
              className={cls.commentTitle}
              title={t('Comments')}
              bold
            />
          }
          off={
            <TextDeprecated
              size={TextSize.L}
              className={cls.commentTitle}
              title={t('Comments')}
            />
          }
        />

        <CommentForm
          onSendComment={onSendComment}
          isLoading={commentsIsLoading}
        />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    </DynamicModuleLoader>
  )
})
