import { memo } from 'react'

import { ArticleView } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/burger.svg'
import GridIcon from '@/shared/assets/icons/tile.svg'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleViewSelectorRedesigned.module.scss'
import { ArticleViewSelectorProps } from '../ArticleViewSelector'

const viewTypes = [
  {
    id: '2',
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    id: '1',
    view: ArticleView.GRID,
    icon: GridIcon,
  },
]

export const ArticleViewSelectorRedesigned = memo(
  (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView)

      sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX)
    }

    return (
      <Card
        className={classNames(cls.articleViewSelector, {}, [className])}
        padding="8"
        border="round"
      >
        <HStack gap="8">
          {viewTypes.map((viewType) => (
            <Icon
              key={viewType.id}
              clickable
              onClick={onClick(viewType.view)}
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          ))}
        </HStack>
      </Card>
    )
  },
)
