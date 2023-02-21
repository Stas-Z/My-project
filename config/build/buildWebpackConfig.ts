import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options // Деструктуризируем объект опций полученых из BuildOptions
  return {
    mode,
    entry: paths.entry,
    output: {
      // Место и название сборки нашего приложения
      filename: '[name].[contenthash].js', //[Дефолтное название] [генератор, для оновления кэша]
      path: paths.build, // Путь до сборки
      clean: true, // Для очистки от старых файлов
    },
    devtool: isDev ? 'inline-source-map' : undefined, // 'inline-source-map' Позволяет отследить к каком месте в коде у нас ошибка
    devServer: isDev ? buildDevServer(options) : undefined, // Вызываем функцию настройки Dev сервера и передаём в неё опции
    plugins: buildPlugins(options), // Вызываем функцию которая возвращает список плагинов и передаём в неё опции
    module: {
      rules: buildLoaders(options), // Вызываем функцию которая возвращает список лоадеров
    },
    resolve: buildResolvers(options), // Вызываем функцию которая возвращает список расширений
  }
}
