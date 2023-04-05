import React, { ReactNode, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props
  const { theme } = useTheme()

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  // Функция 'onKeyDown' которая отслеживает нажатие клавиши, в данном случае 'Escape'
  const onKeyDown = useCallback(
    // Функция 'useCallback' мемоизирует значение какой-то функции, запоминает его и
    // всегда возвращает ссылку на одну и ту же функцию, если в массиве зависимости ничего не изменилось
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler],
  )

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      // На корень (window) навешиваем слушатель события keydown, который отрабатывает нажатие на кнопку
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      // Очищаем слушатель событий keydown
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
