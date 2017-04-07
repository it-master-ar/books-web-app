const webpack = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    files: ['./test/**/*.spec.js'],
    colors: true,

    preprocessors: {
      './test/**/*.spec.js': ['webpack']
    },

    webpack,
    webpackMiddleware: { noInfo: true }

  })
}
