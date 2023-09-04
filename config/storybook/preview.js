import { addDecorator } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
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
}

addDecorator(StyleDecorator) // Декоратор подключает глобальные стили
addDecorator(RouterDecorator) // Декоратор подключает Router
addDecorator(ThemeDecorator(Theme.LIGHT)) // Декоратор подключает визуальную тему
addDecorator(SuspenseDecorator)
