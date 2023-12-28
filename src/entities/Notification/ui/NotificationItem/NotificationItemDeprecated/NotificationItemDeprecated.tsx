import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text } from '@/shared/ui/deprecated/Text'

import cls from './NotificationItemDeprecated.module.scss'
import { Notification } from '../../../model/types/notifications'

interface NotificationItemDeprecatedProps {
  className?: string
  item: Notification
}

export const NotificationItemDeprecated = memo(
  (props: NotificationItemDeprecatedProps) => {
    const { className, item } = props

    const content = (
      <Card
        theme={CardTheme.OUTLINED}
        className={classNames(cls.notificationItem, {}, [className])}
      >
        <Text title={item.title} text={item.description} />
      </Card>
    )

    if (item.href) {
      return (
        <a
          className={cls.link}
          target="_blank"
          href={item.href}
          rel="noreferrer"
        >
          {content}
        </a>
      )
    }

    return content
  },
)
