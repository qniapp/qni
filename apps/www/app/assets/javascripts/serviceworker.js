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

    Util.notNull(qubitCount)
    Util.notNull(stepIndex)
    Util.notNull(steps)
    Util.notNull(targets)

    steps.forEach((operations, i) => {
      simulator.runStep(operations)

      self.postMessage({
        type: 'step',
        step: i,
        amplitudes: i === stepIndex ? simulator.amplitudes(targets) : [],
        blochVectors: simulator.blochVectors,
        measuredBits: simulator.measuredBits,
        flags: simulator.flags
      })
    })

    self.postMessage({type: 'finish'})
  },
  false
)
