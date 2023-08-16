import { ReactNode } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { close, isMounted } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  })
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  if (lazy && !isMounted) {
    // проверяет если модалка в монтированна
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
