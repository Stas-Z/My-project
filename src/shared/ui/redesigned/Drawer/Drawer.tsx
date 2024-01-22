import { ReactNode, memo, useCallback, useEffect } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider'
import { toggleFeatures } from '@/shared/lib/features'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'

import cls from './Drawer.module.scss'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'

interface DrawerProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Drawer content
   */
  children: ReactNode
  /**
   * @description Flag to open/close drawer
   */
  isOpen?: boolean
  /**
   * @description Callback to close drawer
   */
  onClose?: () => void
  /**
   * @description Flag to render drawer only when it is open
   */
  lazy?: boolean
}

const height = window.innerHeight - 100

export const DrawerContent = memo((props: DrawerProps) => {
  const { Gesture, Spring } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
  const { theme } = useTheme()
  const { className, children, isOpen, onClose, lazy } = props

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [isOpen, openDrawer, api])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  )

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  if (lazy && !isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.drawer, mods, [
          className,
          theme,
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => cls.drawerNew,
            off: () => cls.drawerOld,
          }),
        ])}
      >
        <Overlay onClick={() => close()} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
})

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}

export const Drawer = memo((props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  )
})
