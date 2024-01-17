import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './SidebarItemRedesigned.module.scss'
import { SidebarItemProps } from '../SidebarItem'

export const SidebarItemRedesigned = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      activeClassName={cls.active}
    >
      <Icon Svg={item.Icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
