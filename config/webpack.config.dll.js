const webpack = require('webpack');
const path = require('path');
const packageJson = require('../package.json');
const paths = require('./paths');

const nodeEnv = process.env.NODE_ENV;
const outputDir = nodeEnv === 'production' ? paths.appBuild : paths.appCache;

const vendors = Object.keys(packageJson.dependencies)
  .filter(depName => ![
    /^@material-ui/,
  ].some(reg => reg.test(depName)));

module.exports = {
  mode: nodeEnv,
  entry: {
    vendors,
  },
  output: {
    filename: '[name].[chunkhash:8].dll.js',
    path: outputDir,
    library: '[name]_[chunkhash:8]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(outputDir, 'vendors-manifest.json'),
      name: '[name]_[chunkhash:8]',
    }),
  ],
};
