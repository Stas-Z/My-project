import { ReactNode, memo, useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Tabs.module.scss'
import { Card } from '../Card/Card'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'

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
  direction?: FlexDirection
}

export const Tabs = memo((props: TabsProps) => {
  const { className, onTabClick, tabs, value, direction = 'row' } = props

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab)
    },
    [onTabClick],
  )

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value
        return (
          <Card
            data-testid={`Tab.${tab.value}`}
            variant={isSelected ? 'light' : 'normal'}
            className={cls.tab}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
})
