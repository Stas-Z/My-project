import { MutableRefObject, ReactNode, useEffect, useRef } from 'react'

import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/const/localstorage'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { TestProps } from '@/shared/types/tests'

import cls from './Page.module.scss'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
  parentRef?: MutableRefObject<HTMLDivElement>
  saveScroll?: boolean
}

export const Page = (props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
    parentRef,
    saveScroll = false,
    'data-testid': dataTestId,
  } = props

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useEffect(() => {
    if (!saveScroll) {
      sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX)
    }
  }, [saveScroll])

  const pageClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.pageRedesigned,
    off: () => cls.page,
  })

  return (
    <main
      ref={parentRef}
      className={classNames(pageClass, {}, [className])}
      data-testid={dataTestId ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  )
}
