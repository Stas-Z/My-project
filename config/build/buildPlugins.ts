import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

// Функция которая возвращает список плагинов
export function buildPlugins({
  paths,
  isDev,
  analyze,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  // Специальный тип для плагинов

  const plugins = [
    new HtmlWebpackPlugin({
      // Создаёт для сборки фаил index.html и подключает в него все скрпты и другие файлы
      template: paths.html, // Путь к шаблоны index.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin()) // наш hmr плагин
  }
  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
