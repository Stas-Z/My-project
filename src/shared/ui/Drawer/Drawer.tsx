import { useTheme } from 'app/providers/ThemeProvider'
import { ReactNode, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'
import { Overlay } from '../Overlay/Overlay'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
})
