import { memo, useState } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './SidebarRedesigned.module.scss'
import { useSidebarItems } from '../../../model/selectors/getSidebarItems'
import { SidebarItem } from '../../SidebarItem/SidebarItem'
import { SidebarProps } from '../Sidebar'

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
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
      <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
      <VStack role="navigation" as="nav" gap="8" className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </VStack>
      <Icon
        Svg={ArrowIcon}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  )
})
