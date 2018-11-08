const path = require('path');
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname, '..', 'src');
const nodeModules = path.resolve(__dirname, '..', 'node_modules');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: `${root}/index.ts`,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [root, nodeModules],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
};
