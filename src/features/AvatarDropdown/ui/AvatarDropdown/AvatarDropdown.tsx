import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Dropdown } from 'shared/ui/Popups'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import DefaultAvatar from 'shared/assets/icons/default-avatar.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User'
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
              href: RoutPath.admin_panel,
            },
          ]
          : []),
        {
          id: '2',
          content: t('Profile'),
          href: RoutPath.profile + authData.id,
        },
        {
          id: '3',
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
      trigger={
        authData.avatar ? (
          <Avatar size={30} src={authData.avatar} />
        ) : (
          <DefaultAvatar className={cls.avatar} />
        )
      }
      direction="bottom_left"
    />
  )
})
