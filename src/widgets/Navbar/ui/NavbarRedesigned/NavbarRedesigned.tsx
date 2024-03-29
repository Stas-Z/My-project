import { memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificatioButton } from '@/features/NotificatioButton'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './NavbarRedesigned.module.scss'
import { NavbarProps } from '../Navbar'

export const NavbarRedesigned = memo(({ className }: NavbarProps) => {
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
        <HStack gap="16" className={cls.actions}>
          <NotificatioButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onShowModal} variant="clear" className={cls.links}>
        {t('Sign in')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  )
})
