import type { StoryFn } from '@storybook/react'

export const RedesignedDecorator =
  (redesign?: boolean) => (StoryComponent: StoryFn) => {
    localStorage.removeItem('isArticleRatingEnabled')
    if (redesign) {
      localStorage.setItem('isArticleRatingEnabled', 'true')
    }

    return <StoryComponent />
  }
