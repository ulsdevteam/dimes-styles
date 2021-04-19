module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Load Handlebars templates
    config.module.rules.push({
      test: /\.handlebars$/,
      use: ['handlebars-loader']
    })
    return config
  }
}
