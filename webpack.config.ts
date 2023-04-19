import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const PORT = env.port || 3000 // Пытаемся получить переменные env, если переменные не заданы,
  // у нас есть дефолтное значение "3000".

  const mode = env.mode || 'development' // Пытаемся получить переменные env, если переменные не заданы, у нас есть дефолтное значение "development".
  const isDev = mode === 'development'
  const apiUrl = env.apiUrl || 'http://localhost:8000' // адрес сервера бэкенд

  const { analyze } = env // переменная env для анализа бандла

  const paths: BuildPaths = {
    // Список путей
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // Стартовая точка приложения
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analyze,
    apiUrl,
  })

  return config
}
