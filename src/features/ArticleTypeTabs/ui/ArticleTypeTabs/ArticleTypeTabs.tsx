import { ReactNode, memo, useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation('translation-articles')

  // Список типов статей (IT, Economics и т.д.)
  const typeTabs = useMemo(
    () =>
      Object.values(ArticleType).reduce(
        (accumulator: TabItem[], currentValue) => [
          ...accumulator,
          {
            value: currentValue as string,
            content: t(currentValue) as ReactNode,
          },
        ],
        [],
      ),
    [t],
  )

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType)
    },
    [onChangeType],
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabsDeprecated
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
    />
  )
})
