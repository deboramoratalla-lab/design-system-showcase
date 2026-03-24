import * as React from 'react'
import './Avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarType = 'photo' | 'logo' | 'initials'
export type AvatarShape = 'round' | 'square' | 'default'

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize
  type?: AvatarType
  shape?: AvatarShape
  src?: string
  alt?: string
  name?: string
  initials?: string
}

const SIZE_BY_TYPE: Record<AvatarType, Record<AvatarSize, number>> = {
  photo: { sm: 24, md: 48, lg: 40, xl: 82 },
  logo: { sm: 24, md: 48, lg: 40, xl: 82 },
  initials: { sm: 24, md: 40, lg: 48, xl: 82 },
}

const SHAPE_BY_TYPE: Record<AvatarType, AvatarShape> = {
  photo: 'round',
  logo: 'square',
  initials: 'default',
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function initialsFromName(name?: string): string {
  if (!name) return '?'

  const tokens = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (!tokens.length) return '?'

  const first = tokens[0]?.charAt(0) ?? ''
  const second = tokens.length > 1 ? tokens[tokens.length - 1]?.charAt(0) ?? '' : ''

  return `${first}${second}`.toUpperCase()
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      size = 'md',
      type,
      shape,
      src,
      alt,
      name,
      initials,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const resolvedInitials = (initials ?? initialsFromName(name)).slice(0, 2).toUpperCase()
    const resolvedType = type ?? (src ? 'photo' : 'initials')
    const resolvedShape = shape ?? SHAPE_BY_TYPE[resolvedType]
    const resolvedSizePx = SIZE_BY_TYPE[resolvedType][size]
    const shouldRenderImage = (resolvedType === 'photo' || resolvedType === 'logo') && Boolean(src)
    const label = alt ?? name ?? (shouldRenderImage ? 'Avatar image' : resolvedInitials)
    const mergedStyle = {
      ...(style as React.CSSProperties | undefined),
      ['--avatar-size' as string]: `${resolvedSizePx}px`,
    }

    return (
      <span
        ref={ref}
        className={cx('ds-avatar', className)}
        data-size={size}
        data-type={shouldRenderImage ? resolvedType : 'initials'}
        data-shape={resolvedShape}
        style={mergedStyle}
        role="img"
        aria-label={label}
        {...rest}
      >
        {shouldRenderImage ? (
          <img className="ds-avatar__image" src={src} alt="" />
        ) : (
          <span className="ds-avatar__fallback" aria-hidden>
            {resolvedInitials}
          </span>
        )}
      </span>
    )
  }
)

Avatar.displayName = 'Avatar'
