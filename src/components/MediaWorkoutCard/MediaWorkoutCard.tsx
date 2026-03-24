import * as React from 'react'
import { ChevronRight, Play } from 'lucide-react'
import { Badge } from '../Badge'
import { Button } from '../Button'
import './MediaWorkoutCard.css'

export interface MediaWorkoutCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description: string
  thumbnailSrc?: string
  statusLabel?: string
  ctaLabel: string
  onAction?: () => void
  mediaAlt?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MediaWorkoutCard = React.forwardRef<HTMLDivElement, MediaWorkoutCardProps>(
  (
    {
      title,
      description,
      thumbnailSrc,
      statusLabel,
      ctaLabel,
      onAction,
      mediaAlt,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cx('ds-media-workout-card', className)}
        data-has-title={title ? 'true' : undefined}
        {...rest}
      >
        {title ? (
          <div className="ds-media-workout-card__head">
            <h2 className="ds-media-workout-card__title">{title}</h2>
          </div>
        ) : null}

        <div className="ds-media-workout-card__body">
          <p className="ds-media-workout-card__description">{description}</p>

          <div className="ds-media-workout-card__media">
            {thumbnailSrc ? (
              <img className="ds-media-workout-card__media-image" src={thumbnailSrc} alt={mediaAlt ?? ''} />
            ) : (
              <div className="ds-media-workout-card__media-placeholder" aria-hidden>
                <span className="ds-media-workout-card__media-placeholder-glyph">
                  <Play fill="currentColor" />
                </span>
              </div>
            )}

            <span className="ds-media-workout-card__media-play" aria-hidden>
              <Play fill="currentColor" />
            </span>

            {statusLabel ? (
              <Badge className="ds-media-workout-card__media-badge" size="sm" type="value" label={statusLabel} />
            ) : null}
          </div>

          <Button className="ds-media-workout-card__button" trailingIcon={<ChevronRight />} onClick={onAction}>
            {ctaLabel}
          </Button>
        </div>
      </section>
    )
  },
)

MediaWorkoutCard.displayName = 'MediaWorkoutCard'
