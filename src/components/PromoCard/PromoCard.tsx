import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { TextStack } from '../TextStack'
import './PromoCard.css'

export interface PromoCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  subtitle?: string
  imageSrc?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const PromoCard = React.forwardRef<HTMLButtonElement, PromoCardProps>(
  ({ title, subtitle, imageSrc, className, type = 'button', ...rest }, ref) => {
    return (
      <button ref={ref} type={type} className={cx('ds-promo-card', className)} {...rest}>
        <span className="ds-promo-card__image-wrap" aria-hidden>
          {imageSrc ? <img className="ds-promo-card__image" src={imageSrc} alt="" /> : <span className="ds-promo-card__shape" />}
        </span>

        <TextStack
          className="ds-promo-card__copy"
          gap="sm"
          title={<span className="ds-promo-card__title">{title}</span>}
          subtitle={subtitle ? <span className="ds-promo-card__subtitle">{subtitle}</span> : undefined}
        />

        <span className="ds-promo-card__icon" aria-hidden>
          <ChevronRight />
        </span>
      </button>
    )
  },
)

PromoCard.displayName = 'PromoCard'
