import {
  FC,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { Virtuoso, VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Virtualize.module.scss'

type ViewType = 'list' | 'grid'

export interface VirtualizeProps<T> {
  data: T[]
  className?: string
  view?: ViewType
  isLoading?: boolean
  lastIndex?: number
  renderNode: (index: number, item: T) => ReactNode
  onScrollEnd?: () => void
  renderSkeleton?: (index: number) => ReactNode
  parentRef?: MutableRefObject<HTMLDivElement>
  placeholder?: FC<{ index: number }>
}

export const Virtualize = <T, >(props: VirtualizeProps<T>) => {
  const {
    className,
    data,
    renderNode,
    view = 'list',
    onScrollEnd,
    renderSkeleton,
    isLoading = false,
    parentRef,
    lastIndex = 0,
    placeholder,
  } = props

  const ref = useRef<VirtuosoHandle>(null)

  const timeoutScroll = useCallback(
    () => setTimeout(() => {
      ref.current?.scrollToIndex({
        index: lastIndex,
        align: 'center',
        behavior: 'auto',
      })
    }, 100),
    [lastIndex],
  )

  useEffect(() => {
    timeoutScroll()

    return () => {
      clearTimeout(timeoutScroll())
    }
  }, [timeoutScroll])

  return view === 'list' ? (
    <Virtuoso
      className={classNames(cls.virtualize, {}, [className])}
      data={data}
      itemContent={(index, item) => (isLoading ? renderSkeleton?.(index) : renderNode(index, item))}
      endReached={onScrollEnd}
      initialTopMostItemIndex={lastIndex}
      customScrollParent={parentRef?.current}
      useWindowScroll
    />
  ) : (
    <VirtuosoGrid
      className={classNames(cls.virtualize, {}, [className])}
      ref={ref}
      data={data}
      itemContent={(index, item) => (isLoading ? renderSkeleton?.(index) : renderNode(index, item))}
      components={{ ScrollSeekPlaceholder: placeholder }}
      scrollSeekConfiguration={{
        enter: (velocity) => Math.abs(velocity) > 200,
        exit: (velocity) => Math.abs(velocity) < 30,
      }}
      endReached={onScrollEnd}
      listClassName={cls.itemsGridWrapper}
      customScrollParent={parentRef?.current}
      useWindowScroll
    />
  )
}
