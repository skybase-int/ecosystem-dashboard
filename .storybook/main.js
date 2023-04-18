const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-figma-comparator',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_ENVIRONMENT: 'development', // storybook should run on development environment
  }),
  webpackFinal: async (config) => {
    // use custom next/image to avoid image issues
    config.resolve.alias['next/image'] = require.resolve('./NextImage.js');
    // properly setup import aliases
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );

    return config;
  },
};
