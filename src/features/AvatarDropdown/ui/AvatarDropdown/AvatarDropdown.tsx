import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'

import cls from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            id: '1',
            content: t('Admin'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      id: '2',
      content: t('Profile'),
      href: getRouteProfile(authData.id),
    },
    {
      id: '3',
      content: t('Logout'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames(cls.avatarDropdown, {}, [className])}
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
          direction="bottom_left"
          data-testid="AvatarDropdown"
        />
      }
      off={
        <DropdownDeprecated
          className={classNames(cls.avatarDropdown, {}, [className])}
          items={items}
          trigger={
            <AvatarDeprecated
              size={30}
              src={authData.avatar}
              fallbackInverted
            />
          }
          direction="bottom_left"
          data-testid="AvatarDropdown"
        />
      }
    />
  )
})
