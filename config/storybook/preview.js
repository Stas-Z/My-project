import { addDecorator } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import isLokiRunning from '@loki/is-loki-running'
import useLokiCaptureDelay from '@/shared/config/storybook/use-loki-capture-delay.hook'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

addDecorator(StyleDecorator) // Декоратор подключает глобальные стили
addDecorator(RouterDecorator) // Декоратор подключает Router
addDecorator(ThemeDecorator(Theme.LIGHT)) // Декоратор подключает визуальную тему
addDecorator(SuspenseDecorator)
