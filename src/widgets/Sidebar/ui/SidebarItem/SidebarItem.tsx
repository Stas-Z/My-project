import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { SidebarItemDeprecated } from './SidebarItemDeprecated/SidebarItemDeprecated'
import { SidebarItemRedesigned } from './SidebarItemRedesigned/SidebarItemRedesigned'
import { SidebarItemType } from '../../model/types/sidebar'

export interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<SidebarItemRedesigned {...props} />}
      off={<SidebarItemDeprecated {...props} />}
    />
  )
})
