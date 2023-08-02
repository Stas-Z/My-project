import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { NotificatioButton } from 'features/NotificatioButton'
import { Dropdown } from 'shared/ui/Popups'
import { AvatarDropdown } from 'features/AvatarDropdown'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('OpenBlog App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutPath.article_create}
          theme={AppLinkTheme.INVERTED}
          className={cls.createBtn}
        >
          {t('Create new article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificatioButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Text
        className={cls.appName}
        title={t('OpenBlog App')}
        theme={TextTheme.INVERTED}
      />
      <Button
        onClick={onShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  )
})
