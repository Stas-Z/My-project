import path from 'path'

import { Project } from 'ts-morph'

const project = new Project({})

// Добавляем фаилы с которыми мы будем работать.
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()
// Путь до shared/ui C:\production-project\src\shared\ui
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(uiPath)
const componentsDirs = sharedUiDirectory?.getDirectories()

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  return layers.some((layer) => value.startsWith(layer))
}

componentsDirs?.forEach((directory) => {
  // К путю файла добавляем index.ts C:/production-project/src/shared/ui/AppLink/index.ts
  const indexFilePath = `${directory.getPath()}/index.ts`

  // Проверяем если в папке уже существует index.ts
  const indexFile = directory.getSourceFile(indexFilePath)

  if (!indexFile) {
    // код в фаиле index.ts
    const sourceCode = `export * from './${directory.getBaseName()}'\n`

    // создаём файл index.ts
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    })
    file.save()
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '') // shared/ui/Button/Button

    const segments = valueWithoutAlias.split('/') // [ 'shared', 'ui', 'Button', 'Button' ]

    const isSharedLayer = segments?.[0] === 'shared'
    const isUiSlice = segments?.[1] === 'ui'

    // Обрезаем импорт до 3 сегмента  import { Button } from '@/shared/ui/Button'
    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/')
      importDeclaration.setModuleSpecifier(`@/${result}`)
    }
  })
})

project.save()
