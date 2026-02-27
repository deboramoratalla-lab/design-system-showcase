export type Tone = {
  token: string
  name: string
  hex: string
}

export type ColorFamily = {
  family: string
  description: string
  tones: Tone[]
}

export const primaryPalette: Tone[] = [
  { token: 'core.color.neutral.gray-900', name: 'Neutral 900', hex: '#12282E' },
  { token: 'core.color.neutral.gray-800', name: 'Neutral 800', hex: '#243C42' },
  { token: 'core.color.neutral.gray-700', name: 'Neutral 700', hex: '#3E565B' },
  { token: 'core.color.neutral.gray-500', name: 'Neutral 500', hex: '#8FA0A4' },
  { token: 'core.color.neutral.gray-300', name: 'Neutral 300', hex: '#D4DCDD' },
  { token: 'core.color.neutral.gray-100', name: 'Neutral 100', hex: '#F5F9F9' },
]

export const highlightPalette: Tone[] = [
  { token: 'core.color.brand.ice-blue.500', name: 'Ice Blue 500', hex: '#2CB6D4' },
  { token: 'core.color.brand.avocado-green.500', name: 'Avocado Green 500', hex: '#1FB67A' },
  { token: 'core.color.brand.egg-orange.500', name: 'Egg Orange 500', hex: '#C56B33' },
  { token: 'core.color.brand.grape-lilac.500', name: 'Grape Lilac 500', hex: '#8C3DDA' },
]

export const primitiveColorFamilies: ColorFamily[] = [
  {
    family: 'Ice Blue',
    description: 'Tech / info accents and interactive highlights.',
    tones: [
      { token: 'core.color.brand.ice-blue.50', name: '50', hex: '#F2FBFE' },
      { token: 'core.color.brand.ice-blue.100', name: '100', hex: '#E9F8FC' },
      { token: 'core.color.brand.ice-blue.200', name: '200', hex: '#E1F4F8' },
      { token: 'core.color.brand.ice-blue.300', name: '300', hex: '#AEE3F0' },
      { token: 'core.color.brand.ice-blue.400', name: '400', hex: '#6FD0E6' },
      { token: 'core.color.brand.ice-blue.500', name: '500', hex: '#2CB6D4' },
      { token: 'core.color.brand.ice-blue.600', name: '600', hex: '#195A76' },
      { token: 'core.color.brand.ice-blue.700', name: '700', hex: '#13495F' },
      { token: 'core.color.brand.ice-blue.800', name: '800', hex: '#0D3747' },
      { token: 'core.color.brand.ice-blue.900', name: '900', hex: '#07232E' },
    ],
  },
  {
    family: 'Avocado Green',
    description: 'Positive and growth-oriented states.',
    tones: [
      { token: 'core.color.brand.avocado-green.50', name: '50', hex: '#F7FDF2' },
      { token: 'core.color.brand.avocado-green.100', name: '100', hex: '#F4FBEF' },
      { token: 'core.color.brand.avocado-green.200', name: '200', hex: '#F1F9E8' },
      { token: 'core.color.brand.avocado-green.300', name: '300', hex: '#BDEBCF' },
      { token: 'core.color.brand.avocado-green.400', name: '400', hex: '#69D4A3' },
      { token: 'core.color.brand.avocado-green.500', name: '500', hex: '#1FB67A' },
      { token: 'core.color.brand.avocado-green.600', name: '600', hex: '#0B5E40' },
      { token: 'core.color.brand.avocado-green.700', name: '700', hex: '#094E35' },
      { token: 'core.color.brand.avocado-green.800', name: '800', hex: '#073C29' },
      { token: 'core.color.brand.avocado-green.900', name: '900', hex: '#04281C' },
    ],
  },
  {
    family: 'Egg Orange',
    description: 'Warning, energy and emphasis moments.',
    tones: [
      { token: 'core.color.brand.egg-orange.50', name: '50', hex: '#FFF9F1' },
      { token: 'core.color.brand.egg-orange.100', name: '100', hex: '#FFF7EB' },
      { token: 'core.color.brand.egg-orange.200', name: '200', hex: '#FFF5E7' },
      { token: 'core.color.brand.egg-orange.300', name: '300', hex: '#FFD6B3' },
      { token: 'core.color.brand.egg-orange.400', name: '400', hex: '#F2A870' },
      { token: 'core.color.brand.egg-orange.500', name: '500', hex: '#C56B33' },
      { token: 'core.color.brand.egg-orange.600', name: '600', hex: '#763B19' },
      { token: 'core.color.brand.egg-orange.700', name: '700', hex: '#5F2F13' },
      { token: 'core.color.brand.egg-orange.800', name: '800', hex: '#47220E' },
      { token: 'core.color.brand.egg-orange.900', name: '900', hex: '#2F1508' },
    ],
  },
  {
    family: 'Grape Lilac',
    description: 'Alternative category coding and educational emphasis.',
    tones: [
      { token: 'core.color.brand.grape-lilac.50', name: '50', hex: '#FDFBFF' },
      { token: 'core.color.brand.grape-lilac.100', name: '100', hex: '#FBF7FF' },
      { token: 'core.color.brand.grape-lilac.200', name: '200', hex: '#F8F3FF' },
      { token: 'core.color.brand.grape-lilac.300', name: '300', hex: '#E9CCFF' },
      { token: 'core.color.brand.grape-lilac.400', name: '400', hex: '#C98BFF' },
      { token: 'core.color.brand.grape-lilac.500', name: '500', hex: '#8C3DDA' },
      { token: 'core.color.brand.grape-lilac.600', name: '600', hex: '#561DA1' },
      { token: 'core.color.brand.grape-lilac.700', name: '700', hex: '#471783' },
      { token: 'core.color.brand.grape-lilac.800', name: '800', hex: '#351262' },
      { token: 'core.color.brand.grape-lilac.900', name: '900', hex: '#240C41' },
    ],
  },
]

export const neutralColorFamily: ColorFamily = {
  family: 'Neutral',
  description: 'Base surfaces, text hierarchy and UI structure.',
  tones: [
    { token: 'core.color.neutral.white', name: 'white', hex: '#FFFFFF' },
    { token: 'core.color.neutral.black', name: 'black', hex: '#000000' },
    { token: 'core.color.neutral.gray-50', name: '50', hex: '#F9FAFA' },
    { token: 'core.color.neutral.gray-100', name: '100', hex: '#F5F9F9' },
    { token: 'core.color.neutral.gray-200', name: '200', hex: '#F1F4F4' },
    { token: 'core.color.neutral.gray-300', name: '300', hex: '#D4DCDD' },
    { token: 'core.color.neutral.gray-400', name: '400', hex: '#B3C2CA' },
    { token: 'core.color.neutral.gray-500', name: '500', hex: '#8FA0A4' },
    { token: 'core.color.neutral.gray-600', name: '600', hex: '#5F7479' },
    { token: 'core.color.neutral.gray-700', name: '700', hex: '#3E565B' },
    { token: 'core.color.neutral.gray-800', name: '800', hex: '#243C42' },
    { token: 'core.color.neutral.gray-900', name: '900', hex: '#12282E' },
  ],
}

export const feedbackColorFamilies: ColorFamily[] = [
  {
    family: 'Feedback Background',
    description: 'Background layers for feedback messages.',
    tones: [
      { token: 'core.color.feedback-background.success', name: 'success', hex: '#EBFFF0' },
      { token: 'core.color.feedback-background.info', name: 'info', hex: '#F1F0FF' },
      { token: 'core.color.feedback-background.warning', name: 'warning', hex: '#FFF5E5' },
      { token: 'core.color.feedback-background.danger', name: 'danger', hex: '#FFE9E5' },
    ],
  },
  {
    family: 'Feedback Border',
    description: 'Border tokens for feedback emphasis.',
    tones: [
      { token: 'core.color.feedback-border.success', name: 'success', hex: '#63E2B3' },
      { token: 'core.color.feedback-border.info', name: 'info', hex: '#6B5BEC' },
      { token: 'core.color.feedback-border.warning', name: 'warning', hex: '#FFB546' },
      { token: 'core.color.feedback-border.danger', name: 'danger', hex: '#FF5F46' },
    ],
  },
  {
    family: 'Feedback Foreground',
    description: 'Text/icon colors for feedback states.',
    tones: [
      { token: 'core.color.feedback-foreground.success', name: 'success', hex: '#215E2F' },
      { token: 'core.color.feedback-foreground.info', name: 'info', hex: '#3D2FA7' },
      { token: 'core.color.feedback-foreground.warning', name: 'warning', hex: '#744601' },
      { token: 'core.color.feedback-foreground.danger', name: 'danger', hex: '#741101' },
    ],
  },
]

export const spacingScale = [
  { token: 'core.spacing.scale.0', value: 0 },
  { token: 'core.spacing.scale.1', value: 4 },
  { token: 'core.spacing.scale.2', value: 8 },
  { token: 'core.spacing.scale.3', value: 12 },
  { token: 'core.spacing.scale.4', value: 16 },
  { token: 'core.spacing.scale.5', value: 20 },
  { token: 'core.spacing.scale.6', value: 24 },
  { token: 'core.spacing.scale.8', value: 32 },
  { token: 'core.spacing.scale.10', value: 40 },
  { token: 'core.spacing.scale.12', value: 48 },
  { token: 'core.spacing.scale.16', value: 64 },
  { token: 'core.spacing.scale.20', value: 80 },
]

export const typographyStyles = [
  {
    token: 'core.typography.font-size.16 / line-height.24',
    family: 'Surt',
    label: 'Body Regular',
    size: 16,
    lineHeight: 24,
    weight: 400,
    text: 'Design systems align teams and accelerate product delivery.',
  },
  {
    token: 'core.typography.font-size.20 / line-height.28',
    family: 'Surt',
    label: 'Body Emphasis',
    size: 20,
    lineHeight: 28,
    weight: 500,
    text: 'Readable defaults improve UX and consistency.',
  },
  {
    token: 'core.typography.font-size.40 / line-height.48',
    family: 'Gustavo',
    label: 'Display',
    size: 40,
    lineHeight: 48,
    weight: 700,
    text: 'TAP Mindset',
  },
]

export const radiusTokens = [
  { token: 'core.border.radius.none', px: 0 },
  { token: 'core.border.radius.sm', px: 6 },
  { token: 'core.border.radius.md', px: 8 },
  { token: 'core.border.radius.lg', px: 12 },
  { token: 'core.border.radius.xl', px: 16 },
  { token: 'core.border.radius.2xl', px: 20 },
  { token: 'core.border.radius.full', px: 9999 },
]

export const borderWidths = [
  { token: 'core.border.width.none', px: 0 },
  { token: 'core.border.width.thin', px: 1 },
  { token: 'core.border.width.medium', px: 2 },
  { token: 'core.border.width.thick', px: 4 },
]

export const breakpoints = [
  { token: 'core.breakpoint.min-width', px: 320, role: 'Small mobile baseline' },
  { token: 'core.breakpoint.default-width', px: 375, role: 'Default mobile frame' },
  { token: 'core.breakpoint.max-width', px: 560, role: 'Large mobile / phablet cap' },
]
