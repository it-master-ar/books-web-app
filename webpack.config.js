module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'lib/index.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
