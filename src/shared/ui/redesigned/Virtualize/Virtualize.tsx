import {
  FC,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'

import {
  LogLevel,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoHandle,
} from 'react-virtuoso'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Virtualize.module.scss'

type ViewType = 'list' | 'grid'

export interface VirtualizeProps<T> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description List of items to render in Virtualize
   */
  data: T[]
  /**
   * @description Display type
   * @default 'list'
   */
  view?: ViewType
  /**
   * @description The flag to render a skeleton
   */
  isLoading?: boolean
  /**
   * @description Index of clicked element, it helps to scroll back to his position
   */
  lastIndex?: number
  /**
   * @description Function that render elements
   */
  renderNode: (index: number, item: T) => ReactNode
  /**
   * @description Called when reach the bottom of the page
   */
  onScrollEnd?: () => void
  /**
   * @description Function that render skeletons
   */
  renderSkeleton?: (index: number) => ReactNode
  /**
   * @description A reference to a scrollable parent element
   */
  parentRef?: MutableRefObject<HTMLDivElement>
  /**
   * @description It renders instead of element, if the user scrolls too fast.
   */
  placeholder?: FC<{ index: number }>
}

export const Virtualize = <T,>(props: VirtualizeProps<T>) => {
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
    () =>
      setTimeout(() => {
        ref.current?.scrollToIndex({
          index: lastIndex,
          align: 'end',
          behavior: 'smooth',
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
      itemContent={renderNode}
      endReached={onScrollEnd}
      overscan={500}
      role="feed"
      initialTopMostItemIndex={lastIndex}
      customScrollParent={parentRef?.current}
      useWindowScroll
      ref={ref}
      logLevel={LogLevel.DEBUG}
    />
  ) : (
    <VirtuosoGrid
      className={classNames(cls.virtualize, {}, [className])}
      ref={ref}
      data={data}
      itemContent={(index, item) => renderNode(index, item)}
      components={{ ScrollSeekPlaceholder: placeholder }}
      scrollSeekConfiguration={{
        enter: (velocity) => Math.abs(velocity) > 200,
        exit: (velocity) => Math.abs(velocity) < 30,
      }}
      endReached={onScrollEnd}
      overscan={500}
      role="feed"
      listClassName={cls.itemsGridWrapper}
      customScrollParent={parentRef?.current}
      useWindowScroll
    />
  )
}
