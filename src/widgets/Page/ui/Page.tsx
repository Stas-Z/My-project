import { MutableRefObject, ReactNode, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getScrollSaveByPath } from '@/features/ScrollSave'
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

  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname),
  )

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition
      return
    }
    document.body.scrollIntoView()
  }, [scrollPosition])

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
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
