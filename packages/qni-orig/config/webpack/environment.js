const { config, environment } = require("@rails/webpacker")

const WebpackerPwa = require("webpacker-pwa")
new WebpackerPwa(config, environment)

// environment.config.output.filename = function (entry) {
//   if (entry.chunk.name === 'service-worker' || entry.chunk.name === 'npm') {
//     return '[name].js'
//   } else {
//     return '[name]-[contenthash].js'
//   }
// }

module.exports = environment
