import { ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './StickyContentLayout.module.scss'

interface StickyContentLayoutProps {
  className?: string
  left?: ReactNode
  content: ReactNode
  right?: ReactNode
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
  const { className, content, left, right } = props

  return (
    <div className={classNames(cls.stickyContentLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  )
}
