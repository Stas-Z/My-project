import { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Popover } from '@/shared/ui/Popups'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'
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
      <Icon Svg={NotificationIcon} className={cls.icon} inverted />
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
          <AnimationProvider>
            <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
        </>
      )}
    </div>
  )
})
