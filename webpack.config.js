const webpack = require('webpack')

let filename = 'lib/index.js'
const plugins = []

if (process.env.ENV === 'prod') {
  filename = 'lib/index.min.js'

  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }))
}

module.exports = {
  entry: './src/index.js',

  devtool: 'source-map',

  output: {
    path: __dirname,
    filename
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },

  plugins
}
