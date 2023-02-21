import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

// Функция которая возвращает список расширений
export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    // Указываем расширение для тех файлов для которых при импорте мы не будем указывать расширение
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
