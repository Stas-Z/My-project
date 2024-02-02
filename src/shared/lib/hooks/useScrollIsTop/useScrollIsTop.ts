import { MutableRefObject, useRef, useState } from 'react'

import { useInitialEffect } from '../useInitialEffect/useInitialEffect'

interface useScrollIsTopProps {
  animationDelay: number
}

export const useScrollIsTop = ({ animationDelay }: useScrollIsTopProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollFade, setScrollFade] = useState(false)

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useInitialEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
        setScrollFade(false)
        clearTimeout(timerRef.current)
      } else {
        setScrollFade(true)
        timerRef.current = setTimeout(() => {
          setScrolled(false)
        }, animationDelay)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll) // удаляем обработчик
  })

  return { scrolled, scrollFade }
}
