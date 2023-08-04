import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

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
  const [isMounted, setIsMounted] = useState(false) // Для монтирования модалки в дом

  const ANIMATION_DELAY = 300
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

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
        <Overlay onClick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
