module.exports = function (config) {
  config.set({
    frameworks: ["qunit"],
    files: [
      {
        pattern: "**/*.ts",
        type: "module",
        included: true,
      },
    ],
    preprocessors: {
      "**/*.ts": ["esbuild"],
    },
    reporters: ["mocha"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_INFO,
  });
};
