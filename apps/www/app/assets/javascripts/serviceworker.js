import {Simulator} from '@qni/simulator'
import {Util} from '@qni/common'

self.addEventListener(
  'message',
  function (e) {
    const qubitCount = e.data.qubitCount
    const stepIndex = e.data.stepIndex
    const steps = e.data.steps
    const targets = e.data.targets
    const simulator = new Simulator('0'.repeat(qubitCount))
    const backend = e.data.backend

    Util.notNull(qubitCount)
    Util.notNull(stepIndex)
    Util.notNull(steps)
    Util.notNull(targets)

    if (backend) {
      const json = e.data.json
      Util.notNull(json)

      runBackend(json, qubitCount, stepIndex, steps, targets, backend)
    } else {
      runQniSimulator(qubitCount, stepIndex, steps, targets)
    }

    self.postMessage({type: 'finish'})
  },
  false
)

function runQniSimulator(qubitCount, stepIndex, steps, targets) {
  const simulator = new Simulator('0'.repeat(qubitCount))

  steps.forEach((operations, i) => {
    simulator.runStep(operations)

    self.postMessage({
      type: 'step',
      step: i,
      amplitudes: i === stepIndex ? simulator.amplitudes(targets) : {},
      blochVectors: simulator.blochVectors,
      measuredBits: simulator.measuredBits,
      flags: simulator.flags
    })
  })
}

function runBackend(json, qubitCount, stepIndex, steps, targets, backend) {
  const params = new URLSearchParams({
    id: json,
    qubitCount: qubitCount,
    stepIndex: stepIndex,
    steps: JSON.stringify(steps),
    targets: targets,
    backend: backend
  })

  fetch(`/backend.json?${params}`, {
    method: 'GET'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to connect to Qni's backend endpoint.")
      }
      return response.json()
    })
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        const stepResult = response[i]
        self.postMessage({
          type: 'step',
          step: i,
          amplitudes: stepResult['amplitudes'],
          blochVectors: stepResult['blochVectors'],
          measuredBits: stepResult['measuredBits'],
          flags: {}
        })
      }
    })
    .catch(error => {
      console.error(error)
    })
}
