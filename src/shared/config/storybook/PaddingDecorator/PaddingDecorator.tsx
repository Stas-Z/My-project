import { StoryFn } from '@storybook/react'

export const PaddingDecorator =
  (padTop = 150, padLeft = 50) =>
  (StoryComponent: StoryFn) => (
    <div
      style={{
        paddingTop: padTop,
        paddingLeft: padLeft,
        display: 'flex',
      }}
    >
      <StoryComponent />
    </div>
  )
