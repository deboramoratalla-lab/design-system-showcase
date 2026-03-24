import * as React from 'react'
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'
import './Banner.css'

export type BannerTone = 'info' | 'success' | 'error' | 'warning'

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  tone?: BannerTone
  icon?: React.ReactNode
  dismissible?: boolean
  closeLabel?: string
  onDismiss?: () => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function getDefaultIcon(tone: BannerTone) {
  switch (tone) {
    case 'success':
      return <CheckCircle2 />
    case 'error':
      return <AlertCircle />
    case 'warning':
      return <AlertCircle />
    case 'info':
    default:
      return <Info />
  }
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      title,
      description,
      tone = 'info',
      icon,
      dismissible = false,
      closeLabel = 'Dismiss notification',
      onDismiss,
      className,
      ...rest
    },
    ref,
  ) => {
    const resolvedIcon = icon ?? getDefaultIcon(tone)

    return (
      <div ref={ref} className={cx('ds-banner', className)} data-tone={tone} role="status" {...rest}>
        <span className="ds-banner__icon" aria-hidden>
          {resolvedIcon}
        </span>

        <div className="ds-banner__copy">
          <p className="ds-banner__title">{title}</p>
          {description ? <p className="ds-banner__description">{description}</p> : null}
        </div>

        {dismissible ? (
          <button
            type="button"
            className="ds-banner__dismiss"
            aria-label={closeLabel}
            onClick={onDismiss}
          >
            <X size={20} strokeWidth={2.25} aria-hidden />
          </button>
        ) : null}
      </div>
    )
  },
)

Banner.displayName = 'Banner'
