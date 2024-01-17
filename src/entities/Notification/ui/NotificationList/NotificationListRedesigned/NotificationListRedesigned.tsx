import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './NotificationListRedesigned.module.scss'
import { useNotifications } from '../../../api/notificationApi'
import { NotificationItem } from '../../NotificationItem/NotificationItem'
import { NotificationListProps } from '../NotificationList'

export const NotificationListRedesigned = memo(
  (props: NotificationListProps) => {
    const { className } = props
    const { data, isLoading } = useNotifications(null, {
      pollingInterval: 10000,
    })

    if (isLoading) {
      return (
        <VStack
          gap="16"
          max
          className={classNames(cls.notificationList, {}, [className])}
        >
          <Skeleton width="100%" border="8px" height="80px" />
          <Skeleton width="100%" border="8px" height="80px" />
          <Skeleton width="100%" border="8px" height="80px" />
        </VStack>
      )
    }

    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.notificationList, {}, [className])}
      >
        {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
      </VStack>
    )
  },
)
