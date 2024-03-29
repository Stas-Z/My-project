import { memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated'
import { NavbarRedesigned } from './NavbarRedesigned/NavbarRedesigned'

export interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<NavbarRedesigned className={className} />}
      off={<NavbarDeprecated className={className} />}
    />
  )
})
