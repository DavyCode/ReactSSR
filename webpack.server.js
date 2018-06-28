const 
      path = require('path'),
      merge = require('webpack-merge'),
      baseConfig = require('./webpack.base'),
      webpackNodeExternals = require('webpack-node-externals');


const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}


module.exports = merge(baseConfig, config);