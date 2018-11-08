const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist', 'development'),
    pathinfo: false,
    publicPath: '/',
  },
  watch: true,
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        APP_ENV: JSON.stringify('development'),
      },
    }),
    new HotModuleReplacementPlugin(),
  ],
});
