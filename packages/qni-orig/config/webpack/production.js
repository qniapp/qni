process.env.NODE_ENV = process.env.NODE_ENV || "production"

const environment = require("./environment")

const TerserPlugin = require("terser-webpack-plugin")
environment.config.set("optimization.minimize", true)

environment.config.delete("optimization.minimizer")
environment.config.set("optimization.minimizer", [
  new TerserPlugin({
    terserOptions: {
      mangle: {
        keep_classnames: true,
        reserved: ["QuantumCircuitElement", "CircuitStepElement", "CircuitDropzoneElement",
                   "HGateElement",
                   "XGateElement", "YGateElement", "ZGateElement",
                   "PhaseGateElement",
                   "RootNotGateElement",
                   "RxGateElement", "RyGateElement", "RzGateElement",
                   "ControlGateElement",
                   "SwapGateElement",
                   "BlochDisplayElement",
                   "WriteGateElement",
                   "MeasurementGateElement",
                   "CircleNotationElement",
                   "RunCircuitButtonElement"]
      },
    },
  }),
])

module.exports = environment.toWebpackConfig()
