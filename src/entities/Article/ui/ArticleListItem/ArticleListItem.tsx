import { HTMLAttributeAnchorTarget, memo } from 'react'

import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { RoutPath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Text } from '@/shared/ui/Text'

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
  const { t } = useTranslation('articles')

  const title = <Text text={article.title} className={cls.title} />
  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const img = <img src={article.img} className={cls.img} alt={article.title} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )
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
          {img}
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={RoutPath.article_details + article.id}>
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
      target={target}
      to={RoutPath.article_details + article.id}
      onClick={onButtonClick}
      className={classNames(cls.articleListItemGrid, {}, [
        className,
        cls[view],
      ])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          {img}
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
