import { Simulator } from "lib/simulator.ts"

self.addEventListener(
  "message",
  function (e) {
    const nqubit = e.data.nqubit
    const steps = e.data.steps
    const targets = e.data.targets
    const simulator = new Simulator("0".repeat(nqubit))

    steps.forEach((operations, i) => {
      simulator.runStep(operations)

      self.postMessage({
        type: "step",
        step: i,
        amplitudes: simulator.amplitudes(targets),
        blochVectors: simulator.blochVectors,
        measuredBits: simulator.measuredBits,
        flags: simulator.flags,
      })
    })

    self.postMessage({ type: "finish" })
  },
  false,
)
