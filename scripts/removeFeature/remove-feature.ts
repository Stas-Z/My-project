import type { Node } from 'ts-morph'
import { Project, SyntaxKind } from 'ts-morph'

import { replaceComponent } from './replaceComponent'
import { replaceToggleFunction } from './replaceFunction'

const removedFeatureName = process.argv[2] // example isArticleEnabled
const featureState = process.argv[3] // example on\off

const toggleFunctionName = 'toggleFeatures' // Название функции
const toggleComponentName = 'ToggleFeatures' // Название компонента

if (!removedFeatureName) {
  throw new Error('!----- Please enter the name of the feature-flag -----!')
}

if (!featureState) {
  throw new Error(
    '!----- Please enter the state of the feature ( on \\ off ) -----!',
  )
}
if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('!----- Incorrect feature state value ( on \\ off ) -----!')
}

const project = new Project({})

// Добавляем фаилы с которыми мы будем работать.
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFunction(node: Node) {
  let isToggleFeatures = false

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true
    }
  })
  return isToggleFeatures
}

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier) // находим названия компонентов

  return identifier?.getText() === toggleComponentName // Проверяем если название компонента совподает с искомым
}

files.forEach((sourceFile) => {
  // eslint-disable-next-line
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      return replaceToggleFunction(node, removedFeatureName, featureState)
    }
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      return replaceComponent(node, removedFeatureName, featureState)
    }
  })
})

project.save()
