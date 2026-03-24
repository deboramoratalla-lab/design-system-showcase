import type { StorybookConfig } from '@storybook/react-vite';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);

const config: StorybookConfig = {
  "staticDirs": [
    ...getCodeEditorStaticDirs(filename)
  ],
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "storybook-addon-code-editor",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook"
  ],
  "framework": "@storybook/react-vite"
};
export default config;
