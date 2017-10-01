const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')
const CopyWebpackPlugin = require('copy-webpack-plugin')

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
if (process.env.NODE_ENV === 'development' && !process.env.PUBLIC_PATH) process.env.PUBLIC_PATH = 'public'

const ip = process.env.IP || '0.0.0.0'
const port = (+process.env.PORT + 1) || 3001
const DEBUG = process.env.NODE_ENV === 'development'
const srcPath = path.join(__dirname, '../src')
const PUBLIC_PATH = `${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/client')
  ],
  // Stub the modules JOI requires so we can use it client-side
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.[hash].js',
    publicPath: DEBUG ? `http://${ip}:${port}/` : PUBLIC_PATH
  },
  resolve: {
    root: [srcPath],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, '../public'), to: 'public'}
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,

    })
  ],
  postcss: function () {
    return [autoprefixer]
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.png$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file?prefix=fonts/' },
      { test: /\.json$/, loader: 'json' }
    ]
  }
}

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`
  )

  config.plugins = config.plugins.concat([
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig)
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig),
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}

module.exports = config
