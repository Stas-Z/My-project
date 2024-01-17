import { memo } from 'react'

import ThemeIcon from '@/shared/assets/icons/theme-icon.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'

import cls from './ThemeSwitcherDeprecated.module.scss'

interface ThemeSwitcherDeprecatedProps {
  className?: string
  onToggleHandler?: () => void
  theme?: Theme
}
/**
 * Use redesigned component
 * @deprecated
 */
export const ThemeSwitcherDeprecated = memo(
  ({ className, onToggleHandler, theme }: ThemeSwitcherDeprecatedProps) => {
    return (
      <Button
        theme={ButtonTheme.CLEAR}
        className={classNames('', {}, [className, theme])}
        onClick={onToggleHandler}
      >
        <Icon
          Svg={ThemeIcon}
          width={40}
          height={40}
          className={cls.iconColor}
        />
      </Button>
    )
  },
)
