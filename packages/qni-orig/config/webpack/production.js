process.env.NODE_ENV = process.env.NODE_ENV || "production"

const environment = require("./environment")

// FIXME
environment.config.set("optimization.minimize", false)

module.exports = environment.toWebpackConfig()
