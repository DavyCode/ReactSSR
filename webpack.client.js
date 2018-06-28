const 
      path = require('path'),
      merge = require('webpack-merge'),
      baseConfig = require('./webpack.base');

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)