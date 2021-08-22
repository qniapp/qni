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
    files: [
      {
        pattern: "app/components/**/*Element.ts",
        type: "module",
        included: false,
      },
      {
        pattern: "app/javascript/test/**/*.ts",
        type: "module",
        included: true,
      },
    ],
    exclude: [],
    preprocessors: {
      "app/javascript/test/**/*.ts": ["webpack", "sourcemap"],
    },
    reporters: ["dots"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_INFO,
  })
}
