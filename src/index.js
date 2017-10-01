require('babel-polyfill')
require('babel-core/register')
require('ignore-styles')

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server('./', () => {
    require('./server')
  })
