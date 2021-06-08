import { Simulator } from "lib/simulator.ts"

self.addEventListener(
  "message",
  function (e) {
    const nqubit = e.data.nqubit
    const steps = e.data.steps
    var simulator = new Simulator("0".repeat(nqubit))

    steps.forEach((instructions, i) => {
      const magnitudes = []
      const phases = []

      simulator.runStep(instructions)

      for (let c = 0; c < 2 ** nqubit; c++) {
        magnitudes.push(simulator.magnitude(c))
        phases.push(simulator.degree(c))
      }

      self.postMessage({
        type: "step",
        step: i,
        bits: simulator.bits,
        magnitudes: magnitudes,
        phases: phases,
        flags: simulator.flags,
      })
    })

    self.postMessage({ type: "finish" })
  },
  false,
)
