const { environment } = require("@rails/webpacker")

environment.config.output.filename = function (entry) {
  if (entry.chunk.name === "npm") {
    return "[name].js"
  } else {
    return "[name]-[contenthash].js"
  }
}

module.exports = environment
