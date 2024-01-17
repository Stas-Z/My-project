import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { NotificationItemDeprecated } from './NotificationItemDeprecated/NotificationItemDeprecated'
import { NotificationItemRedesigned } from './NotificationItemRedesigned/NotificationItemRedesigned'
import { Notification } from '../../model/types/notifications'

export interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<NotificationItemRedesigned className={className} item={item} />}
      off={<NotificationItemDeprecated className={className} item={item} />}
    />
  )
})
