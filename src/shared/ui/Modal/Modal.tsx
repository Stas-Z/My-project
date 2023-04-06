import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props

  const { theme } = useTheme()

  const ANIMATION_DELAY = 300

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const [isMounted, setIsMounted] = useState(false) // Для монтирования модалки в дом

  useEffect(() => {
    // Монтирования модалки
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
      timerRef.current = setTimeout(() => {
        setIsMounted(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

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

  useEffect(() => {
    if (isOpen) {
      // На корень (window) навешиваем слушатель события keydown, который отрабатывает нажатие на кнопку
      window.addEventListener('keydown', onKeyDown)

      // Очищаем timer
      clearTimeout(timerRef.current)
    }
    return () => {
      // Очищаем слушатель событий keydown
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  if (lazy && !isMounted) {
    // проверяет если модалка в монтированна
    return null
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
