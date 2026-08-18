import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.innerHTML = `
    @font-face {
      font-family: "Surt";
      src:
        local("Surt-Normal-TRIAL Regular"),
        local("Surt-Normal-TRIAL-Regular"),
        local("Surt-Normal-TRIAL -TRIAL");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "Surt";
      src:
        local("Surt-Normal-TRIAL Semibold"),
        local("Surt-Normal-TRIAL Smbold-TRIAL"),
        local("Surt-Normal-TRIAL-Semibold");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }

    @font-face {
      font-family: "Surt";
      src:
        local("Surt-Normal-TRIAL Bold"),
        local("Surt-Normal-TRIAL-Bold"),
        local("Surt-Normal-TRIAL");
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }

    button[aria-controls] svg[type='group'] { display: none !important; }
  `
  document.head.appendChild(style)
}

addons.setConfig({
  showPanel: true,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/controls/panel',
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
