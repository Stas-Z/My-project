import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../model/types/article'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Text title={block.title} className={cls.title} key={block.id} />
            }
            off={
              <TextDeprecated
                title={block.title}
                className={cls.title}
                key={block.id}
              />
            }
            key={block.id}
          />
        )}
        {block.paragraphs.map((paragraph) => {
          return (
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Text
                  text={paragraph}
                  className={cls.paragraph}
                  key={paragraph}
                />
              }
              off={
                <TextDeprecated
                  text={paragraph}
                  className={cls.paragraph}
                  key={paragraph}
                />
              }
              key={paragraph}
            />
          )
        })}
      </div>
    )
  },
)
