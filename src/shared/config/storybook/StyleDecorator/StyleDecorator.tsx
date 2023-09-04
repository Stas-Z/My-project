import { StoryFn } from '@storybook/react'
// eslint-disable-next-line fsd-pathcheker/layer-imports
import '@/app/styles/index.scss'

export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />
