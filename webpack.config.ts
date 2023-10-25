import path from 'path'

import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl
  }
  if (mode === 'production') {
    return '/api'
  }
  return 'http://localhost:8000'
}

export default (env: BuildEnv) => {
  const PORT = env?.port || 3000 // Пытаемся получить переменные env, если переменные не заданы,
  // у нас есть дефолтное значение "3000".

  const mode = env?.mode || 'development' // Пытаемся получить переменные env, если переменные не заданы, у нас есть дефолтное значение "development".
  const isDev = mode === 'development'
  const apiUrl = getApiUrl(mode, env?.apiUrl) // адрес сервера бэкенд

  const analyze = env?.analyze || false // переменная env для анализа бандла

  const paths: BuildPaths = {
    // Список путей
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // Стартовая точка приложения
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    img: path.resolve(__dirname, 'public', 'img'),
    buildImg: path.resolve(__dirname, 'build', 'img'),
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analyze,
    apiUrl,
    project: 'frontend',
  })

  return config
}
