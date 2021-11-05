// Karma configuration
// Generated on Thu Aug 27 2020 10:47:00 GMT+0900 (Japan Standard Time)

module.exports = function (config) {
  config.set({
    basePath: ".",
    frameworks: ["qunit"],
    files: [
      {
        pattern: "app/javascript/components/**/*Element.ts",
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
      "app/javascript/test/**/*.ts": ["esbuild"],
    },
    reporters: ["mocha", "notify"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_INFO,
  })
}
