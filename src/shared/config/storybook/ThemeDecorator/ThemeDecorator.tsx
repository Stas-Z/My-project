import { StoryFn } from '@storybook/react'

// eslint-disable-next-line fsd-pathcheker/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/const/theme'
import { getFeatureFlag } from '@/shared/lib/features'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  const newDesign = getFeatureFlag('isAppRedesigned')
  return (
    <ThemeProvider initialTheme={theme}>
      <div
        id="app"
        className={newDesign ? `app_redesigned ${theme}` : `app ${theme}`}
      >
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
}
