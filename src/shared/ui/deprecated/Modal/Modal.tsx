import { ReactNode } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'

import cls from './Modal.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Modal content
   */
  children?: ReactNode
  /**
   * @description Flag to show/hide modal
   */
  isOpen?: boolean
  /**
   * @description Callback to close modal
   */
  onClose?: () => void
  /**
   * @description Flag to render modal only when it is open
   */
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
