module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],
    files: [
      {
        pattern: "../dist/index.js",
        type: "module",
      },
      "h-gate-element.js",
      "circuit-dropzone-element.js",
      "circuit-step-element.js"
    ],
    reporters: ["mocha"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_INFO,
  })
}
