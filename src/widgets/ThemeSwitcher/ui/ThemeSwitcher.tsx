import { memo } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import ThemeIcon from '@/shared/assets/icons/theme-icon.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className, theme])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={cls.iconColor} />
    </Button>
  )
})
