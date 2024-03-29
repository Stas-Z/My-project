import { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleSortFiled } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/sort'
import { Select, SelectOption } from '@/shared/ui/deprecated/Select'

import cls from './ArticleSortSelectorDeprecated.module.scss'
import { ArticleSortSelectorProps } from '../ArticleSortSelector'

/**
 * Use redesigned component
 * @deprecated
 */
export const ArticleSortSelectorDeprecated = memo(
  (props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props
    const { t } = useTranslation('translation-articles')

    const sortFieldOptions = useMemo<SelectOption<ArticleSortFiled>[]>(
      () => [
        {
          value: ArticleSortFiled.CREATED,
          content: t('by date'),
        },
        {
          value: ArticleSortFiled.TITLE,
          content: t('title'),
        },
        {
          value: ArticleSortFiled.VIEWS,
          content: t('views'),
        },
      ],
      [t],
    )

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('Low - High'),
        },
        {
          value: 'desc',
          content: t('High - Low'),
        },
      ],
      [t],
    )

    return (
      <div className={classNames(cls.articleSortSelector, {}, [className])}>
        <Select<ArticleSortFiled>
          onChange={onChangeSort}
          value={sort}
          options={sortFieldOptions}
          label={t('Sort by')}
        />
        <Select<SortOrder>
          onChange={onChangeOrder}
          value={order}
          options={orderOptions}
          label={t('by')}
          className={cls.order}
        />
      </div>
    )
  },
)
