import { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

import cls from './NotificatioButtonRedesigned.module.scss'

interface NotificatioButtonRedesignedProps {
  className?: string
}

export const NotificatioButtonRedesigned = memo(
  (props: NotificatioButtonRedesignedProps) => {
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
      <Icon Svg={NotificationIcon} onClick={onOpenDrawer} clickable />
    )
    return (
      <div>
        {!isMobile ? (
          <Popover
            className={classNames(cls.notificationButton, {}, [className])}
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
  },
)
