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
      "app/javascript/lib/**/*.ts": ["webpack"],
      "app/javascript/test/**/*.ts": ["webpack"],
    },

    reporters: ["spec"],

    autoWatch: false,

    browsers: ["ChromeHeadless"],

    singleRun: true,
  })
}
