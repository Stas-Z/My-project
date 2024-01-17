import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated'
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned'

export interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<SidebarRedesigned className={className} />}
      off={<SidebarDeprecated className={className} />}
    />
  )
})
