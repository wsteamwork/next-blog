// @ts-check
const compose     = require('recompose').compose;
const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withSass       = require('@zeit/next-sass');
const withCss        = require('@zeit/next-css');

module.exports = withPlugins([
  withTypescript,
  withCss,
  [
    withSass, {
    // cssModules: true,
  },
  ],
], {
  // target: 'serverless',
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
