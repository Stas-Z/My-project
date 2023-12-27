import { memo, useCallback } from 'react'

import { saveJsonSettings } from '@/entities/User'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'

import { ThemeSwitcherDeprecated } from './ThemeSwitcherDeprecated/ThemeSwitcherDeprecated'
import { ThemeSwitcherRedesigned } from './ThemeSwitcherRedesigned/ThemeSwitcherRedesigned'

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ThemeSwitcherRedesigned
          className={className}
          onToggleHandler={onToggleHandler}
        />
      }
      off={
        <ThemeSwitcherDeprecated
          className={className}
          onToggleHandler={onToggleHandler}
          theme={theme}
        />
      }
    />
  )
})
