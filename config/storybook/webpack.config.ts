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
    locales: '',
    buildLocales: '',
    img: '',
    buildImg: '',
  }
  config.resolve?.modules?.push(paths.src) // Переопределяем путь до папки с исходным кодом
  config.resolve?.extensions?.push('.ts', '.tsx') // Переопределяем расширение для файлов
  config.resolve!.alias = {
    ...config.resolve?.alias,
    '@': paths.src,
  }

  if (config.module?.rules) {
    // Исключаем дефолтный png jpg svg loader
    config.module.rules = config.module?.rules?.map(
      (rule: webpack.RuleSetRule | '...') => {
        if (
          rule !== '...' &&
          /svg/.test(rule.test as string) &&
          /png/.test(rule.test as string) &&
          /jpg/.test(rule.test as string)
        ) {
          return { ...rule, exclude: /\.(png|jpe?g|svg)$/i }
        }
        return rule
      },
    )
  }

  config.module?.rules?.push(
    {
      // Добавляем png jpg loader
      test: /\.(png|jpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/assets/', // Путь где будут лежать файлы
          },
        },
      ],
    },
    {
      // Добавляем svgr loader
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  )
  config.module?.rules?.push(buildCssLoader(true)) // Загрузчик стилей css

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  )

  return config
}
