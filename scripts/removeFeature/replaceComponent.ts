import { SyntaxKind, type Node, JsxAttribute } from 'ts-morph'

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find((node) => node.getName() === name)
}

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText()
  if (value?.startsWith('(')) {
    return value.slice(1, -1)
  }
  return value
}

export const replaceComponent = (
  node: Node,
  removedFeatureName: string,
  featureState: string,
) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute) // Получаем массив атрибутов

  const onAttribute = getAttributeNodeByName(attributes, 'on') // Находим атрибут по названию
  const offAttribute = getAttributeNodeByName(attributes, 'off') // Находим атрибут по названию
  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature') // Находим атрибут по названию

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1) // example isArticleEnabled

  if (featureName !== removedFeatureName) return

  const onValue = getReplacedComponent(onAttribute) // example <ArticleRating />

  const offValue = getReplacedComponent(offAttribute) // example <Card>Text</Card>

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue)
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue)
  }
}
