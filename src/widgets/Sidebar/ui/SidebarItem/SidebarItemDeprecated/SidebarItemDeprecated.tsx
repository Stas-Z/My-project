import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'

import cls from './SidebarItemDeprecated.module.scss'
import { SidebarItemProps } from '../SidebarItem'

/**
 * Use redesigned component
 * @deprecated
 */
export const SidebarItemDeprecated = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
