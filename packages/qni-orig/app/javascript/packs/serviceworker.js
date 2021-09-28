import { Simulator } from "lib/simulator.ts"

self.addEventListener(
  "message",
  function (e) {
    const nqubit = e.data.nqubit
    const steps = e.data.steps
    var simulator = new Simulator("0".repeat(nqubit))

    // const t0 = performance.now()

    steps.forEach((instructions, i) => {
      simulator.runStep(instructions)

      self.postMessage({
        type: "step",
        step: i,
        blochVectors: simulator.blochVectors,
        bits: simulator.bits,
        amplitudes: simulator.amplitudes(),
        flags: simulator.flags,
      })
    })

    // const t1 = performance.now()
    // console.log("Simulation took " + Math.floor(t1 - t0) + " ms")

    self.postMessage({ type: "finish" })
  },
  false,
)

self.addEventListener("install", function (event) {})
self.addEventListener("activate", function (event) {})
self.addEventListener("fetch", function (event) {})
