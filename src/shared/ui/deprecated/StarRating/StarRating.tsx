import { memo, useState } from 'react'

import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './StarRating.module.scss'
import { Icon } from '../Icon/Icon'

interface StarRatingProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Called when a star is selected
   * @param {number} starsCount
   */
  onSelect?: (starsCount: number) => void
  /**
   * @description Height and width of the star
   * @default 30
   */
  size?: number
  /**
   * @description 0 means no stars are selected
   * @default 0
   */
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStarsCount >= starNumber ? cls.hovered : cls.normal,
          ])}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onTouchStart={onHover(starNumber)}
          onFocus={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  )
})
