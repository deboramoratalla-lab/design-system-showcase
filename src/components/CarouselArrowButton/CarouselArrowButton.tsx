import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './CarouselArrowButton.css'

export type CarouselArrowButtonDirection = 'left' | 'right'
export type CarouselArrowButtonVisualState = 'active' | 'inactive' | 'pressed'

export interface CarouselArrowButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  direction: CarouselArrowButtonDirection
  visualState?: CarouselArrowButtonVisualState
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const CarouselArrowButton = React.forwardRef<HTMLButtonElement, CarouselArrowButtonProps>(
  (
    { direction, visualState = 'active', className, disabled = false, type = 'button', ...rest },
    ref,
  ) => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight
    const isDisabled = disabled || visualState === 'inactive'

    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-carousel-arrow-button', className)}
        data-state={visualState}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        {...rest}
      >
        <Icon className="ds-carousel-arrow-button__icon" size={16} strokeWidth={3} aria-hidden />
      </button>
    )
  },
)

CarouselArrowButton.displayName = 'CarouselArrowButton'
