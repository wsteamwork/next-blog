// @ts-check
const compose = require('recompose').compose;

const withTypescript = require('@zeit/next-typescript');
const withSass       = require('@zeit/next-sass');

module.exports = compose(
  withTypescript,
  () => withSass({
    cssModules: true
  }),
);
