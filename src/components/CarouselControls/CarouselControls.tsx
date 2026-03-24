import * as React from 'react'
import { CarouselArrowButton } from '../CarouselArrowButton'
import { CarouselDots } from '../CarouselDots'
import './CarouselControls.css'

export interface CarouselControlsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  slideCount: number
  activeIndex?: number
  previousDisabled?: boolean
  nextDisabled?: boolean
  onPrevious?: () => void
  onNext?: () => void
  previousLabel?: string
  nextLabel?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const CarouselControls = React.forwardRef<HTMLDivElement, CarouselControlsProps>(
  (
    {
      slideCount,
      activeIndex = 0,
      previousDisabled = false,
      nextDisabled = false,
      onPrevious,
      onNext,
      previousLabel = 'Previous slide',
      nextLabel = 'Next slide',
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cx('ds-carousel-controls', className)} {...rest}>
        <CarouselArrowButton
          direction="left"
          visualState={previousDisabled ? 'inactive' : 'active'}
          aria-label={previousLabel}
          onClick={onPrevious}
          disabled={previousDisabled}
        />
        <CarouselDots className="ds-carousel-controls__dots" slideCount={slideCount} activeIndex={activeIndex} />
        <CarouselArrowButton
          direction="right"
          visualState={nextDisabled ? 'inactive' : 'active'}
          aria-label={nextLabel}
          onClick={onNext}
          disabled={nextDisabled}
        />
      </div>
    )
  },
)

CarouselControls.displayName = 'CarouselControls'
