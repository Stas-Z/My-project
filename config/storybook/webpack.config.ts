import path from 'path'
import webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

// Расширяем и переопределяем конфиг webpack для storybook
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'), // Путь до папки с исходным кодом
  }
  config.resolve?.modules?.push(paths.src) // Переопределяем путь до папки с исходным кодом
  config.resolve?.extensions?.push('.ts', '.tsx') // Переопределяем расширение для файлов

  if (config.module?.rules) {
    // Исключаем дефолтный svg loader
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map(
      (rule: webpack.RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i }
        }
        return rule
      },
    )
  }
  config.module?.rules?.push({
    // Добавляем svgr loader
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module?.rules?.push(buildCssLoader(true)) // Загрузчик стилей css

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: false,
    }),
  )

  return config
}
