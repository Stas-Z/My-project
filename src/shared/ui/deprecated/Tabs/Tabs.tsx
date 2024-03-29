import { ReactNode, memo, useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Tabs.module.scss'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description The tabs items to display
   */
  tabs: TabItem[]
  /**
   * @description The value of Tab
   */
  value: string
  /**
   * @description Called when a tab is clicked
   * @param {TabItem} tab
   */
  onTabClick: (tab: TabItem) => void
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
  const { className, onTabClick, tabs, value } = props

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab)
    },
    [onTabClick],
  )

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          data-testid={`Tab.${tab.value}`}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
