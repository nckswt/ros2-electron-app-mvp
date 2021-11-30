/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const electronSource = path.resolve(__dirname, 'public');
const reactSource = path.resolve(__dirname, 'src');
const defaultOutput = path.resolve(__dirname, 'build');

module.exports = [{
  mode: 'development',
  target: 'electron-renderer',
  entry: path.join(reactSource, 'index.js'),

  externals: {
    rclnodejs: 'rclnodejs'
  },

  output: {
    path: defaultOutput,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        include: reactSource,
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
        include: reactSource,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'bundle.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
},
{
  mode: 'development',
  target: 'electron-main',
  entry: path.join(electronSource, 'main.js'),
  output: {
    path: defaultOutput,
    filename: 'main.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{ loader: 'babel-loader' }],
      include: electronSource,
    },
  ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
},
];
