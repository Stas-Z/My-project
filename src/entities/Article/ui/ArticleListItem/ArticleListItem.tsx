import { HTMLAttributeAnchorTarget, memo } from 'react'

import { useTranslation } from 'react-i18next'

import NoImage from '@/shared/assets/icons/blank-picture.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/deprecated/AppImage'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Card } from '@/shared/ui/deprecated/Card'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text } from '@/shared/ui/deprecated/Text'

import cls from './ArticleListItem.module.scss'
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts'
import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  index?: number
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.LIST, target, index } = props
  const { t } = useTranslation('translation-articles')

  const title = (
    <Text text={article.title} className={cls.title} data-testid="Article" />
  )
  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon width={20} height={20} Svg={EyeIcon} />
    </>
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
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user ? article.user.avatar : ''} />
            <Text
              text={article.user ? article.user.username : ''}
              className={cls.username}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          {title}
          {types}
          <AppImage
            errorFallback={errorFallbackList}
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button onClick={onButtonClick} theme={ButtonTheme.OUTLINE}>
                {t('Read more')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
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
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            errorFallback={errorFallbackGrid}
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        {title}
      </Card>
    </AppLink>
  )
})
