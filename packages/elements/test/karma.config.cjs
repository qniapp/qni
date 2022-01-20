module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      {
        pattern: '../dist/index.js',
        type: 'module'
      },
      {
        pattern: '*.js',
        type: 'module'
      },
      {
        pattern: 'common/*.js',
        included: false,
        served: true
      }
    ],
    reporters: ['mocha'],
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    logLevel: config.LOG_INFO
  })
}
