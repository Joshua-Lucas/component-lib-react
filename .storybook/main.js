module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
}
