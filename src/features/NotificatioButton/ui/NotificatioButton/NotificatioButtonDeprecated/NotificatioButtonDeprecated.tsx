import { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Popover } from '@/shared/ui/deprecated/Popups'

import cls from './NotificatioButtonDeprecated.module.scss'

interface NotificatioButtonDeprecatedProps {
  className?: string
}

export const NotificatioButtonDeprecated = memo(
  (props: NotificatioButtonDeprecatedProps) => {
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
      <Button
        onClick={onOpenDrawer}
        theme={ButtonTheme.CLEAR}
        data-testid="NotificatioButton.Trigger"
      >
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
