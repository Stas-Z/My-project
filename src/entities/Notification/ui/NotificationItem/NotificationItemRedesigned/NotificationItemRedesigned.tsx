import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './NotificationItemRedesigned.module.scss'
import { NotificationItemProps } from '../NotificationItem'

export const NotificationItemRedesigned = memo(
  (props: NotificationItemProps) => {
    const { className, item } = props

    const content = (
      <Card className={classNames(cls.notificationItem, {}, [className])}>
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
