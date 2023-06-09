import { ElementType } from 'react'
import { Flex, FlexProps, defaultFlexTag } from '../Flex/Flex'
import { PolymorphicComponentProp } from '../../../types/polymorphic'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = <E extends ElementType = typeof defaultFlexTag>(
  props: PolymorphicComponentProp<E, HStackProps>,
) => {
  const { as, ...otherProps } = props
  const tag: ElementType = as ?? defaultFlexTag

  return <Flex direction="row" as={tag} {...otherProps} />
}
