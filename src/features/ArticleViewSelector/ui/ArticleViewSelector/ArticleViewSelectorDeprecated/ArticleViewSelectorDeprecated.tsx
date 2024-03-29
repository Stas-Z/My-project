import { memo } from 'react'

import { ArticleView } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/list-20-20.svg'
import GridIcon from '@/shared/assets/icons/tiled-20-20.svg'
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'

import cls from './ArticleViewSelectorDeprecated.module.scss'
import { ArticleViewSelectorProps } from '../ArticleViewSelector'

const viewTypes = [
  {
    id: '1',
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    id: '2',
    view: ArticleView.LIST,
    icon: ListIcon,
  },
]
/**
 * Use redesigned component
 * @deprecated
 */
export const ArticleViewSelectorDeprecated = memo(
  (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView)

      sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX)
    }

    return (
      <div className={classNames(cls.articleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.id}
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
          >
            <Icon
              width={20}
              height={20}
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    )
  },
)
