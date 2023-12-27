import type { Preview } from '@storybook/react'

import { RedesignedDecorator } from '@/shared/config/storybook/RedesignedDecorator/RedesignedDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
        { name: 'dark', class: ['app', Theme.DARK], color: '#090949' },
        { name: 'choco', class: ['app', Theme.CHOCOLATE], color: '#372c2e' },
      ],
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    SuspenseDecorator,
    StoreDecorator({ user: {} }),
    RedesignedDecorator(),
  ],
}

export default preview
