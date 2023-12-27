import { memo } from 'react'

import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherRedesignedProps {
  className?: string
  onToggleHandler: () => void
}

export const ThemeSwitcherRedesigned = memo(
  ({ className, onToggleHandler }: ThemeSwitcherRedesignedProps) => {
    return (
      <Icon
        Svg={ThemeIcon}
        clickable
        onClick={onToggleHandler}
        className={className}
      />
    )
  },
)
