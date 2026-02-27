import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    appBg: '#f9fafa',
    appContentBg: '#ffffff',
    appBorderColor: '#d4dcdd',
    appBorderRadius: 8,
    colorPrimary: '#12282e',
    colorSecondary: '#2cb6d4',
    textColor: '#12282e',
    textInverseColor: '#ffffff',
    barTextColor: '#5f7479',
    barSelectedColor: '#12282e',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#d4dcdd',
    inputTextColor: '#12282e',
    fontBase: 'Surt, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    brandTitle: 'TAP Design System',
    brandUrl: '#',
    brandImage: '/brand/wordmark-dark.svg',
    brandTarget: '_self',
  }),
})
