const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
const del = require('del');
const packageJson = require('../package.json');
const paths = require('./paths');

const nodeEnv = process.env.NODE_ENV;
const outputDir = nodeEnv === 'production' ? paths.appPublic : paths.appCache;
console.log(`Creating ${nodeEnv} dll to ${outputDir}`);

if (nodeEnv === 'development') {
  fs.emptyDirSync(paths.appCache);
} else if (nodeEnv === 'production') {
  del.sync([
    path.join(paths.appPublic, 'vendors-manifest.json'),
    path.join(paths.appPublic, '*.dll.js'),
  ]);
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
