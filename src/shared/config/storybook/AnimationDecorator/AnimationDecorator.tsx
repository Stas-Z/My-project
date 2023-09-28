import { StoryFn } from '@storybook/react'

import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

export const AnimationDecorator = () => (StoryComponent: StoryFn) => (
  <AnimationProvider>
    <StoryComponent />
  </AnimationProvider>
)
