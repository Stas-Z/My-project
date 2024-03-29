import { memo, useState } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './SidebarDeprecated.module.scss'
import { useSidebarItems } from '../../../model/selectors/getSidebarItems'
import { SidebarItem } from '../../SidebarItem/SidebarItem'
import { SidebarProps } from '../Sidebar'

/**
 * Use redesigned component
 * @deprecated
 */
export const SidebarDeprecated = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSidebarItems()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <section
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" as="nav" gap="8" className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  )
})
