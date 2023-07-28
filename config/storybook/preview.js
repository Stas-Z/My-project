import { addDecorator } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
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
}

addDecorator(StyleDecorator) // Декоратор подключает глобальные стили
addDecorator(RouterDecorator) // Декоратор подключает Router
addDecorator(ThemeDecorator(Theme.LIGHT)) // Декоратор подключает визуальную тему
addDecorator(SuspenseDecorator)
