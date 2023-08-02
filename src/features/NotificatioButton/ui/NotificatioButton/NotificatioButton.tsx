import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import cls from './NotificatioButton.module.scss'

interface NotificatioButtonProps {
  className?: string
}

export const NotificatioButton = memo((props: NotificatioButtonProps) => {
  const { className } = props

  return (
    <Popover
      className={classNames(cls.notificatioButton, {}, [className])}
      direction="bottom_left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} className={cls.icon} inverted />
        </Button>
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
})
