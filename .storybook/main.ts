import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      strictMode: false,

    }
  },
  viteFinal: (config) => {
    // 开发环境禁用 React 生产模式
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__VITE_ENV__': JSON.stringify('development'),
    };
    config.server = {
      ...config.server,
      host: true,
      allowedHosts: true
    }
    return config;
  },
};
export default config;