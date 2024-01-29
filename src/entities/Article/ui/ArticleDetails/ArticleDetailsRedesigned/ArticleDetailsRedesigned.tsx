import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import NoImage from '@/shared/assets/icons/blank-picture.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleDetailsRedesigned.module.scss'
import { getArticleDetailsData } from '../../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsError } from '../../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsIsLoading } from '../../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../../testing'
import { ArticleDetailsProps } from '../ArticleDetails'
import { renderArticleBlock } from '../renderArticleBlock'

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetailsRedesigned = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation('translation-articles')
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  const errorFallback = (
    <Icon className={cls.img} width={200} height={200} Svg={NoImage} />
  )
  const fallback = <Skeleton width="100%" height={420} border="16px" />

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      // проверка на запрос
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.title} width={300} height={32} border="8px" />
        <Skeleton className={cls.title} width={250} height={24} border="6px" />
        <Skeleton className={cls.img} width="100%" height={420} border="16px" />
        <Skeleton className={cls.title} width={350} height={24} border="6px" />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
          border="16px"
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
          border="16px"
        />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align="center"
        title={t('An error occurred while loading the article')}
      />
    )
  } else {
    content = (
      <>
        <Text title={article?.title} size="l" bold />
        <Text title={article?.subtitle} size="m" />
        <AppImage
          errorFallback={errorFallback}
          src={article?.img}
          fallback={fallback}
          className={cls.img}
        />

        {article?.blocks.map(renderArticleBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack
        gap="16"
        align="unset"
        className={classNames(cls.articleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
