import { memo, useCallback } from 'react'

import CircleUp from '@/shared/assets/icons/circle-up.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useScrollIsTop } from '@/shared/lib/hooks/useScrollIsTop/useScrollIsTop'
import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './ScrollToTopButton.module.scss'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const { scrolled, scrollFade } = useScrollIsTop({ animationDelay: 500 })

  if (__PROJECT__ !== 'storybook') {
    if (!scrolled) {
      return null
    }
  }

  return (
    <Icon
      Svg={CircleUp}
      clickable
      onClick={onClick}
      width={32}
      height={32}
      className={classNames(
        cls.scrollToTopButton,
        { [cls.scrollFadeOut]: scrollFade },
        [className],
      )}
    />
  )
})
