import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

 async babel (config, options) {
    return {
      ...config,
      plugins: Array.isArray(config.plugins)
        ? [
            ...config.plugins,
            ['@babel/plugin-proposal-decorators', { lagacy: true }],
            ['babel-plugin-transform-object-rest-spread'],
          ]
        : [],

      presets: Array.isArray(config.presets)
        ? [
            ...config.presets,
            '@babel/preset-react',
            ['@babel/preset-env', { targets: { node: 'current' } }],
          ]
        : [],
    }
  },
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src'),
      }
    }
    return config
  },
}
export default config
