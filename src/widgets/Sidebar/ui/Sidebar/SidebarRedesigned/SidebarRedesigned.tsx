import { memo, useState } from 'react'

import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'

import cls from './SidebarRedesigned.module.scss'
import { getSidebarItems } from '../../../model/selectors/getSidebarItems'

interface SidebarRedesignedProps {
  className?: string
}

export const SidebarRedesigned = memo(
  ({ className }: SidebarRedesignedProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

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
        <AppLogo className={cls.appLogo} />
      </section>
    )
  },
)
