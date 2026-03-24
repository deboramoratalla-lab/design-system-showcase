import * as React from 'react'
import './CarouselDots.css'

export interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  slideCount: number
  activeIndex?: number
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ slideCount, activeIndex = 0, className, ...rest }, ref) => {
    const total = Math.max(slideCount, 0)
    const safeActiveIndex = Math.min(Math.max(activeIndex, 0), total - 1)

    return (
      <div ref={ref} className={cx('ds-carousel-dots', className)} aria-hidden {...rest}>
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className="ds-carousel-dots__dot"
            data-active={index === safeActiveIndex ? 'true' : undefined}
          />
        ))}
      </div>
    )
  },
)

CarouselDots.displayName = 'CarouselDots'
