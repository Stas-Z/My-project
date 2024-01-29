import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code'
import { Code as CodeRedesigned } from '@/shared/ui/redesigned/Code'

import cls from './ArticleCodeBlockComponent.module.scss'
import { ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props

    const Code = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CodeRedesigned,
      off: () => CodeDeprecated,
    })

    return (
      <div
        className={classNames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    )
  },
)
