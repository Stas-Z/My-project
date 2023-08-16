import { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'

import cls from './NotificatioButton.module.scss'

interface NotificatioButtonProps {
  className?: string
}

export const NotificatioButton = memo((props: NotificatioButtonProps) => {
  const { className } = props
  const isMobile = useDevice()

  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon
        Svg={NotificationIcon}
        className={cls.icon}
        inverted
        height={20}
        width={20}
      />
    </Button>
  )
  return (
    <div>
      {!isMobile ? (
        <Popover
          className={classNames(cls.notificatioButton, {}, [className])}
          direction="bottom_left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      ) : (
        <>
          {trigger}
          <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
            <NotificationList />
          </Drawer>
        </>
      )}
    </div>
  )
})
