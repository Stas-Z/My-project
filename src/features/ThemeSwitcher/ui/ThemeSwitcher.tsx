import { memo, useCallback } from 'react'

import { saveJsonSettings } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/theme-icon.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className, theme])}
      onClick={onToggleHandler}
    >
      <Icon Svg={ThemeIcon} width={40} height={40} className={cls.iconColor} />
    </Button>
  )
})
