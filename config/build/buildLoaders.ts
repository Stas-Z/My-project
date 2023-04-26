import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

// Функция которая возвращает список лоадеров
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  // конфигурируем загрузчики (loaders) для файлов (*.png, *.jpg, *.svg, *.css, *.ts и т.д.)

  // Если не используем тайпскрипт - нужен babel-loader

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const babelLoader = buildBabelLoader(options)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = buildCssLoader(isDev)

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
