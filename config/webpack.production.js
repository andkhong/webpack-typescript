const path = require('path');
const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist', 'production'),
    pathinfo: false,
    publicPath: '/',
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
