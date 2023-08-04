import { useTheme } from 'app/providers/ThemeProvider'
import { ReactNode, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props
  const { theme } = useTheme()

  const { close, isMounted } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  if (lazy && !isMounted) {
    // проверяет если модалка в монтированна
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
})
