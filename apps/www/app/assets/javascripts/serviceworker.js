import {Simulator} from '@qni/simulator'
import {Util} from '@qni/common'

const simulationCache = {}

const runSimulator = e => {
  const circuitJson = e.data.circuitJson
  const qubitCount = e.data.qubitCount
  const stepIndex = e.data.stepIndex
  const steps = e.data.steps
  const targets = e.data.targets
  const simulator = new Simulator('0'.repeat(qubitCount))

  Util.notNull(qubitCount)
  Util.notNull(stepIndex)
  Util.notNull(steps)
  Util.notNull(targets)

  const s_time = new Date()

  if (simulationCache[circuitJson] === undefined) {
    Object.keys(simulationCache).map(key => delete simulationCache[key])
    simulationCache[circuitJson] = {}
  }

  for (const [i, operations] of steps.entries()) {
    let stepResult
    const cachedResult = simulationCache[circuitJson][i]

    if (cachedResult === undefined) {
      simulator.runStep(operations)

      const amplitudes = simulator.amplitudes()

      simulationCache[circuitJson][i] = {
        type: 'step',
        step: i,
        amplitudes: amplitudes,
        blochVectors: simulator.blochVectors,
        measuredBits: simulator.measuredBits,
        flags: simulator.flags
      }

      if (i !== stepIndex) {
        stepResult = {
          type: 'step',
          step: i,
          amplitudes: [],
          blochVectors: simulator.blochVectors,
          measuredBits: simulator.measuredBits,
          flags: simulator.flags
        }
      } else {
        let targetAmplitudes

        if (targets.length > 0) {
          targetAmplitudes = pickTargetAmplitudes(targets, amplitudes)
        } else {
          targetAmplitudes = amplitudes
        }
        stepResult = {
          type: 'step',
          step: i,
          amplitudes: targetAmplitudes,
          blochVectors: simulator.blochVectors,
          measuredBits: simulator.measuredBits,
          flags: simulator.flags
        }
      }
    } else {
      stepResult = {
        type: 'step',
        step: cachedResult.step,
        amplitudes: [],
        blochVectors: cachedResult.blochVectors,
        measuredBits: cachedResult.measuredBits,
        flags: cachedResult.flags
      }

      if (i === stepIndex) {
        stepResult.amplitudes = pickTargetAmplitudes(targets, cachedResult.amplitudes)
      }
    }

    self.postMessage(stepResult)
  }

  const e_time = new Date()
  const diff = e_time.getTime() - s_time.getTime()
  console.log(`${qubitCount} qubit simulation took ${diff} msec`)

  self.postMessage({type: 'finish'})
}

const pickTargetAmplitudes = (targets, amplitudes) => {
  return targets.reduce((map, each) => {
    const c = amplitudes[each]
    if (c === undefined) {
      map[each] = [0, 0]
    } else {
      map[each] = c
    }
    return map
  }, {})
}

self.addEventListener('message', runSimulator, false)
