const isProd = process.env.ENV === 'prod'

let filename = isProd ? 'lib/index.min.js' : 'lib/index.js'

module.exports = {
  entry: './src/index.js',

  devtool: isProd ? 'source-map' : false,

  output: {
    path: __dirname,
    filename
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
