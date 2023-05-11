import { AddCommentForm } from 'features/AddCommentForm'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleCommentsIsLoading } from '../../model/selectors/articleCommentsSelectors'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComment,
} from '../../model/slices/articleDetailsCommentsSlice'
import cls from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
}

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className } = props
    const { t } = useTranslation('articles')
    const dispatch = useAppDispatch()
    const { id } = useParams<{ id: string }>()

    const comments = useSelector(getArticleDetailsComment.selectAll)
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
        <div
          className={classNames(cls.articleDetailsComments, {}, [className])}
        >
          <Text className={cls.commentTitle} title={t('Comments')} />
          <AddCommentForm
            onSendComment={onSendComment}
            isLoading={commentsIsLoading}
          />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
      </DynamicModuleLoader>
    )
  },
)
