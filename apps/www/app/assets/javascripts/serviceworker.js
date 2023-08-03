import {Simulator} from '@qni/simulator'
import {Util} from '@qni/common'

let resultCache = {}

function runSimulator(e) {
  const circuitJson = e.data.circuitJson
  const qubitCount = e.data.qubitCount
  const stepIndex = e.data.stepIndex
  const steps = e.data.steps
  const targets = e.data.targets
  const invalidateCaches = e.data.invalidateCaches
  const debug = e.data.debug
  const backend = e.data.backend

  Util.notNull(qubitCount)
  Util.notNull(stepIndex)
  Util.notNull(steps)
  Util.notNull(targets)

  if (debug) {
    // eslint-disable-next-line no-console
    console.log(
      JSON.stringify(
        e.data,
        ['circuitJson', 'qubitCount', 'stepIndex', 'steps', 'type', 'targets', 'angle', 'invalidateCaches'],
        2,
      ),
    )
  }

  if (backend) {
    runBackend(circuitJson, qubitCount, stepIndex, steps, targets, backend)
  } else {
    const s_time = new Date()
    const simulator = new Simulator('0'.repeat(qubitCount))

    if (resultCache[circuitJson] === undefined || invalidateCaches) {
      resultCache = {}
      resultCache[circuitJson] = {}
    }

    let cacheHit = false

    for (const [i, operations] of steps.entries()) {
      let stepResult = {}

      if (resultCache[circuitJson][i] === undefined) {
        resultCache[circuitJson][i] = {}
      }
      const cachedStepResult = resultCache[circuitJson][i]

      if (
        cachedStepResult === undefined ||
        cachedStepResult.targets === undefined ||
        cachedStepResult.targets.length < targets.length
      ) {
        cacheHit = false

        simulator.runStep(operations)

        const allAmplitudes = simulator.state.matrix.clone()
        const blochVectors = Object.assign({}, simulator.blochVectors)
        const measuredBits = Object.assign({}, simulator.measuredBits)
        const flags = Object.assign({}, simulator.flags)

        resultCache[circuitJson][i] = {
          type: 'step',
          step: i,
          amplitudes: allAmplitudes,
          targets,
          blochVectors,
          measuredBits,
          flags,
        }

        if (i === stepIndex) {
          const amplitudes = pickTargetAmplitudes(targets, allAmplitudes)

          stepResult = {
            type: 'step',
            step: i,
            amplitudes,
            blochVectors,
            measuredBits,
            flags,
          }
        } else {
          stepResult = {
            type: 'step',
            step: i,
            amplitudes: [],
            blochVectors,
            measuredBits,
            flags,
          }
        }
      } else {
        cacheHit = true

        stepResult = {
          type: 'step',
          step: i,
          amplitudes: [],
          blochVectors: cachedStepResult.blochVectors,
          measuredBits: cachedStepResult.measuredBits,
          flags: cachedStepResult.flags,
        }

        if (i === stepIndex) {
          stepResult.amplitudes = pickTargetAmplitudes(targets, cachedStepResult.amplitudes)
        }
      }

      self.postMessage(stepResult)
    }

    const e_time = new Date()
    const diff = e_time.getTime() - s_time.getTime()
    const cacheDesc = cacheHit ? '🎯 CACHE HIT' : '💦 CACHE MISS'
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`⏱ simulation took ${diff} msec (${cacheDesc})`)
    }

    self.postMessage({type: 'finish'})
  }
}

function runBackend(json, qubitCount, stepIndex, steps, targets, backend) {
  const params = new URLSearchParams({
    qubitCount,
    stepIndex,
    targets,
    backend,
    id: json,
    steps: JSON.stringify(steps),
  })

  async function call_backend() {
    try {
      const response = await fetch(`/backend.json?${params}`, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error("Failed to connect to Qni's backend endpoint.")
      }

      const jsondata = await response.json()

      for (let i = 0; i < jsondata.length; i++) {
        const stepResult = jsondata[i]
        self.postMessage({
          type: 'step',
          step: i,
          amplitudes: stepResult['amplitudes'],
          blochVectors: stepResult['blochVectors'],
          measuredBits: stepResult['measuredBits'],
          flags: {},
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  call_backend()
}

const pickTargetAmplitudes = (targets, amplitudes) => {
  return targets.reduce((map, each) => {
    if (each >= amplitudes.height) {
      map[each] = [0, 0]
    } else {
      const c = amplitudes.cell(0, each)
      map[each] = [c.real, c.imag]
    }
    return map
  }, {})
}

self.addEventListener('message', runSimulator)
