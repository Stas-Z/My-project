import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { NotificatioButtonDeprecated } from './NotificatioButtonDeprecated/NotificatioButtonDeprecated'
import { NotificatioButtonRedesigned } from './NotificatioButtonRedesigned/NotificatioButtonRedesigned'

interface NotificatioButtonProps {
  className?: string
}

export const NotificatioButton = memo((props: NotificatioButtonProps) => {
  const { className } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<NotificatioButtonRedesigned className={className} />}
      off={<NotificatioButtonDeprecated className={className} />}
    />
  )
})
