import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import NoImage from '@/shared/assets/icons/blank-picture.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleListItemRedesigned.module.scss'
import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/consts/articleConsts'
import { ArticleTextBlock } from '../../../model/types/article'
import { ArticleListItemProps } from '../ArticleListItem'

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.LIST, target, index } = props
  const { t } = useTranslation('translation-articles')

  const userInfo = (
    <>
      <Avatar size={32} src={article.user ? article.user.avatar : ''} />
      <Text bold text={article.user ? article.user.username : ''} />
    </>
  )

  const views = (
    <HStack gap="8">
      <Icon width={20} height={20} Svg={EyeIcon} />
      <Text text={String(article.views)} />
    </HStack>
  )
  const errorFallbackList = <Icon width="100%" height={250} Svg={NoImage} />
  const errorFallbackGrid = <Icon width={200} height={200} Svg={NoImage} />

  const onButtonClick = () => {
    if (index) {
      sessionStorage.setItem(
        ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX,
        JSON.stringify(index),
      )
    } else {
      sessionStorage.setItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX, '0')
    }
  }

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock

    return (
      <Card
        padding="24"
        max
        data-testid="ArticleListItem"
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <VStack gap="16" max>
          <HStack gap="8" max>
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold data-testid="Article" size="l" />
          <Text text={article.subtitle} size="l" />
          <AppImage
            errorFallback={errorFallbackList}
            fallback={<Skeleton width="100%" height={420} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack max justify="between">
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button onClick={onButtonClick} variant="outline">
                {t('Read more')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      onClick={onButtonClick}
      className={classNames(cls.articleListItemGrid, {}, [
        className,
        cls[view],
      ])}
    >
      <Card className={cls.card} border="round" padding="0">
        <AppImage
          errorFallback={errorFallbackGrid}
          fallback={<Skeleton width={250} height={200} className={cls.img} />}
          src={article.img}
          className={cls.img}
          alt={article.title}
        />
        <VStack className={cls.info} gap="4">
          <Text
            title={article.title}
            data-testid="Article"
            className={cls.textBlock}
          />
          <VStack className={cls.footer} gap="4" max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack className={cls.userInfo} gap="4">
              {userInfo}
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
})
