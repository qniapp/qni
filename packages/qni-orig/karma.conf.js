// Karma configuration
// Generated on Thu Aug 27 2020 10:47:00 GMT+0900 (Japan Standard Time)

const webpackConfig = require("./config/webpack/test.js")

module.exports = function (config) {
  config.set({
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

    basePath: ".",

    frameworks: ["qunit"],

    files: ["app/javascript/test/**/*.ts"],

    exclude: [],

    preprocessors: {
      "app/javascript/test/**/*.ts": ["webpack", "sourcemap"],
    },

    reporters: ["dots", "osx"],

    autoWatch: false,

    browsers: ["ChromeHeadless"],

    singleRun: true,
  })
}
