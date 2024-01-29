import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import NoImage from '@/shared/assets/icons/blank-picture.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleDetailsDeprecated.module.scss'
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

export const ArticleDetailsDeprecated = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation('translation-articles')
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  const errorFallback = (
    <Icon className={cls.articleLogo} width={200} height={200} Svg={NoImage} />
  )

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
        <Skeleton
          className={cls.articleLogo}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('An error occurred while loading the article')}
      />
    )
  } else {
    content = (
      <>
        <HStack justify="center" max className={cls.avatarWrapper}>
          <AppImage
            errorFallback={errorFallback}
            src={article?.img}
            className={cls.articleLogo}
            width={200}
            height={200}
          />
        </HStack>
        <VStack gap="4" max data-testid="ArticleDetails.Info">
          <Text
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8" className={cls.articleInfo}>
            <Icon width={20} height={20} Svg={EyeIcon} className={cls.icon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8" className={cls.articleInfo}>
            <Icon
              width={20}
              height={20}
              Svg={CalendarIcon}
              className={cls.icon}
            />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
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
