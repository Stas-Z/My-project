import { useContext } from 'react'

import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK
        break
      case Theme.DARK:
        newTheme = Theme.CHOCOLATE
        break
      case Theme.CHOCOLATE:
        newTheme = Theme.LIGHT
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)

    saveAction?.(newTheme)
  }
  return { theme: theme || Theme.LIGHT, toggleTheme }
}
