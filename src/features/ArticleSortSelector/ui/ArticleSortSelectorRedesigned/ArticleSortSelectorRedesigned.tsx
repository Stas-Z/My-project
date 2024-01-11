import { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleSortFiled } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/sort'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { ListBoxItem } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleSortSelectorRedesignedProps {
  className?: string
  sort: ArticleSortFiled
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortFiled) => void
}

export const ArticleSortSelectorRedesigned = memo(
  (props: ArticleSortSelectorRedesignedProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props
    const { t } = useTranslation('translation-articles')

    const sortFieldOptions = useMemo<ListBoxItem<ArticleSortFiled>[]>(
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

    const orderOptions = useMemo<ListBoxItem<SortOrder>[]>(
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
      <div className={classNames('', {}, [className])}>
        <VStack gap="8">
          <Text text={t('Sort by')} />
          <ListBox<ArticleSortFiled>
            onChange={onChangeSort}
            value={sort}
            items={sortFieldOptions}
          />
          <ListBox<SortOrder>
            onChange={onChangeOrder}
            value={order}
            items={orderOptions}
          />
        </VStack>
      </div>
    )
  },
)
