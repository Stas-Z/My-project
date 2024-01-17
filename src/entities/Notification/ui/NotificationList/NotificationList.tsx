import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { NotificationListDeprecated } from './NotificationListDeprecated/NotificationListDeprecated'
import { NotificationListRedesigned } from './NotificationListRedesigned/NotificationListRedesigned'

export interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<NotificationListRedesigned className={className} />}
      off={<NotificationListDeprecated className={className} />}
    />
  )
})
