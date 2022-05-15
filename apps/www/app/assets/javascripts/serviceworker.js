import {Simulator} from '@qni/simulator'
import {Util} from '@qni/common'

const runSimulator = e => {
  const qubitCount = e.data.qubitCount
  const stepIndex = e.data.stepIndex
  const steps = e.data.steps
  const targets = e.data.targets
  const simulator = new Simulator('0'.repeat(qubitCount))

  Util.notNull(qubitCount)
  Util.notNull(stepIndex)
  Util.notNull(steps)
  Util.notNull(targets)

  // const s_time = new Date()

  for (const [i, operations] of steps.entries()) {
    simulator.runStep(operations)
    self.postMessage({
      type: 'step',
      step: i,
      amplitudes: i === stepIndex ? simulator.amplitudes(targets) : [],
      blochVectors: simulator.blochVectors,
      measuredBits: simulator.measuredBits,
      flags: simulator.flags
    })
  }

  // const e_time = new Date()
  // const diff = e_time.getTime() - s_time.getTime()
  // console.log(`${qubitCount} qubit simulation took ${diff} msec`)

  self.postMessage({type: 'finish'})
}

self.addEventListener('message', runSimulator, false)
