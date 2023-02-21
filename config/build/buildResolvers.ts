import { ResolveOptions } from 'webpack'

// Функция которая возвращает список расширений
export function buildResolvers(): ResolveOptions {
  return {
    // Указываем расширение для тех файлов для которых при импорте мы не будем указывать расширение
    extensions: ['.tsx', '.ts', '.js'],
  }
}
