const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
const packageJson = require('../package.json');
const paths = require('./paths');

const nodeEnv = process.env.NODE_ENV;
const outputDir = nodeEnv === 'production' ? paths.appBuildDll : paths.appCache;
console.log(`build ${nodeEnv} dll...`);

if (nodeEnv === 'development') {
  fs.emptyDirSync(paths.appCache);
} else if (nodeEnv === 'production') {
  fs.emptyDirSync(paths.appBuildDll);
}

module.exports = {
  mode: nodeEnv,
  entry: {
    vendors: Object.keys(packageJson.dependencies),
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
