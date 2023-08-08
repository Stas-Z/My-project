import { Story } from '@storybook/react'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

export const AnimationDecorator = () => (StoryComponent: Story) => (
  <AnimationProvider>
    <StoryComponent />
  </AnimationProvider>
)
