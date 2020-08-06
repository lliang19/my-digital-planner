/* eslint-disable */

const { override, addLessLoader } = require('customize-cra');
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssNormalize = require('postcss-normalize');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    }
  })
);
