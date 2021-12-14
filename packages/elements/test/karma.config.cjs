module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],
    files: [
      {
        pattern: "../dist/index.js",
        type: "module",
      },
      {
        pattern: "../build/test.js",
        type: "module",
      }
    ],
    reporters: ["mocha"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_INFO,
  })
}
