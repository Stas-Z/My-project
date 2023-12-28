import { memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificatioButton } from '@/features/NotificatioButton'
import { getRouteArticlesCreate } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './NavbarDeprecated.module.scss'

interface NavbarDeprecatedProps {
  className?: string
}

/**
 * Use redesigned component
 * @deprecated
 */
export const NavbarDeprecated = memo(({ className }: NavbarDeprecatedProps) => {
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
          to={getRouteArticlesCreate()}
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
