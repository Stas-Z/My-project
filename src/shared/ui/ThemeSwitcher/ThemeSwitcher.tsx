import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import ThemeIcon from 'shared/assets/icons/theme-icon.svg'
import { Button, ButtonTheme } from '../Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <ThemeIcon className={cls.themeIcon} />
      ) : (
        <ThemeIcon className={cls.themeIcon} />
      )}
    </Button>
  )
}
