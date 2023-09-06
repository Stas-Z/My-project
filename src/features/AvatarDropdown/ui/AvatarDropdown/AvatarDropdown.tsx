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
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

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

  return (
    <Dropdown
      className={classNames(cls.avatarDropdown, {}, [className])}
      items={[
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
      ]}
      trigger={<Avatar size={30} src={authData.avatar} fallbackInverted />}
      direction="bottom_left"
    />
  )
})
