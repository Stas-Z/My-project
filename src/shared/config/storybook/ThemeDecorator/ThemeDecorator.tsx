import { StoryFn } from '@storybook/react'

// eslint-disable-next-line fsd-pathcheker/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/const/theme'

export const ThemeDecorator =
  (theme: Theme, newDesign?: boolean) => (StoryComponent: StoryFn) => {
    localStorage.removeItem('isArticleRatingEnabled')
    if (newDesign) {
      localStorage.setItem('isArticleRatingEnabled', 'true')
    }
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={newDesign ? `app_redesigned ${theme}` : `app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    )
  }
