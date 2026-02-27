export const HEX_WHITE = '#FFFFFF'
export const HEX_TEXT = '#12282E'

const hexToRgb = (hex: string) => {
  const safe = hex.replace('#', '')
  return {
    r: Number.parseInt(safe.slice(0, 2), 16),
    g: Number.parseInt(safe.slice(2, 4), 16),
    b: Number.parseInt(safe.slice(4, 6), 16),
  }
}

const srgbToLinear = (channel: number) => {
  const normalized = channel / 255
  return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4
}

const luminance = (hex: string) => {
  const { r, g, b } = hexToRgb(hex)
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b)
}

export const contrastRatio = (first: string, second: string) => {
  const l1 = luminance(first)
  const l2 = luminance(second)
  const light = Math.max(l1, l2)
  const dark = Math.min(l1, l2)
  return (light + 0.05) / (dark + 0.05)
}

export const gradeContrast = (ratio: number) => {
  if (ratio >= 7) return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3) return 'AA Large'
  return 'Fail'
}
