const isProd = process.env.ENV === 'prod'
const filename = isProd ? 'lib/index.min.js' : 'lib/index.js'

module.exports = {
  entry: './src/index.js',

  devtool: isProd ? 'source-map' : false,

  output: {
    path: __dirname,
    filename
  },

  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' },

      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
