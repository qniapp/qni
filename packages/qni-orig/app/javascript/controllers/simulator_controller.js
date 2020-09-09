import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["circuitStep", "stateVector", "circleNotation", "runButton"]

  connect() {
    this.runCircuit()
  }

  gotoBreakpoint(breakpoint) {
    this.toggleCircuitColumnActive(breakpoint)
    this.drawStateVector(breakpoint)
  }

  circuitStepClicked(event) {
    const circuitStep = event.currentTarget
    if (!circuitStep.classList.contains("circuit__step--done")) {
      return
    }

    const breakpoint = this.circuitStepTargets.indexOf(circuitStep)
    this.gotoBreakpoint(breakpoint)
  }

  toggleCircuitColumnActive(breakpoint) {
    this.circuitStepTargets.forEach((el, i) => {
      if (i == breakpoint) {
        el.querySelector(".circuit__breakpoint").classList.add(
          "circuit__breakpoint--active",
        )
      } else {
        el.querySelector(".circuit__breakpoint").classList.remove(
          "circuit__breakpoint--active",
        )
      }
    })
  }

  runCircuit() {
    this.runButtonTarget.classList.add("run-button--running")
    this.runButtonTarget.disabled = true

    Array.prototype.forEach.call(this.circuitStepTargets, (step) => {
      step.classList.remove("circuit__step--done")
    })
    this.magnitudes = {}
    this.phases = {}

    var worker = new Worker("/service-worker.js")
    worker.addEventListener(
      "message",
      function (e) {
        if (e.data.type == "step") {
          const step = this.circuitStepTargets[e.data.step]
          const circuitElements = step.getElementsByClassName("circuit-element")
          if (e.data.gate == "readout") {
            for (const bit in e.data.bits) {
              const value = e.data.bits[bit]
              const readout = circuitElements[bit]
              if (value == 0) {
                readout.classList.remove("rw--1")
                readout.classList.add("rw--0")
              } else {
                readout.classList.remove("rw--0")
                readout.classList.add("rw--1")
              }
            }
          } else if (e.data.gate == "hadamard") {
            if (Object.keys(e.data.global).length > 0) {
              Array.prototype.forEach.call(circuitElements, (h) => {
                if (
                  h.classList.contains("hadamard-gate") &&
                  h.getAttribute("data-if")
                ) {
                  if (e.data.global[h.getAttribute("data-if")] == 0) {
                    h.classList.add("gate--disabled")
                  } else {
                    h.classList.remove("gate--disabled")
                  }
                }
              })
            }
          } else if (e.data.gate == "not") {
            if (Object.keys(e.data.global).length > 0) {
              Array.prototype.forEach.call(circuitElements, (x) => {
                if (
                  x.classList.contains("not-gate") &&
                  x.getAttribute("data-if")
                ) {
                  if (e.data.global[x.getAttribute("data-if")] == 0) {
                    x.classList.add("gate--disabled")
                  } else {
                    x.classList.remove("gate--disabled")
                  }
                }
              })
            }
          }
          this.magnitudes[e.data.step] = e.data["magnitudes"]
          this.phases[e.data.step] = e.data["phases"]
          step.classList.toggle("circuit__step--done")
        } else if (e.data.type == "finish") {
          this.gotoBreakpoint(0)
          this.runButtonTarget.classList.remove("run-button--running")
          this.runButtonTarget.disabled = false
        }
      }.bind(this),
    )

    worker.postMessage({ nqubit: this.nqubit, steps: this.workerSteps })
  }

  // Private

  get workerSteps() {
    return this.circuitStepTargets.map((el, i) => {
      return this.stepTargets(el, i)
    })
  }

  stepTargets(step, i) {
    var targets = new Map()

    Array.prototype.forEach.call(this.circuitElements(i), (el, j) => {
      if (el.classList.contains("qubit-label")) {
        return
      } else if (el.classList.contains("write")) {
        targets.set(j, {
          gate: "write",
          value: parseInt(el.getAttribute("data-value")),
        })
      } else if (el.classList.contains("hadamard-gate")) {
        targets.set(j, { gate: "hadamard", if: el.getAttribute("data-if") })
      } else if (el.classList.contains("phase-gate")) {
        targets.set(j, {
          gate: "phase",
          value: el.getAttribute("data-value"),
        })
      } else if (el.classList.contains("root-not-gate")) {
        targets.set(j, { gate: "root-not" })
      } else if (el.classList.contains("control-dot")) {
        targets.set(j, {
          gate: "control-dot",
          targets: [parseInt(el.getAttribute("data-targets"))],
        })
      } else if (el.classList.contains("not-gate")) {
        targets.set(j, { gate: "not", if: el.getAttribute("data-if") })
      } else if (el.classList.contains("up-gate")) {
        targets.set(j, { gate: "up" })
      } else if (el.classList.contains("down-gate")) {
        targets.set(j, { gate: "down" })
      } else if (el.classList.contains("swap-gate")) {
        targets.set(j, { gate: "swap" })
      } else if (el.classList.contains("readout")) {
        targets.set(j, {
          gate: "readout",
          value: el.getAttribute("data-value"),
          set: el.getAttribute("data-set"),
        })
      }
    })

    return targets
  }

  drawStateVector(breakpoint) {
    const qubitCircles = this.stateVectorTarget.getElementsByClassName(
      "qubit-circle",
    )
    const circleDiameter = qubitCircles[0].clientWidth

    Array.from(Array(2 ** this.nqubit)).map((_, c) => {
      const qubitCircle = qubitCircles[c]
      const magnitudeEl = qubitCircle.querySelector(".qubit-circle__magnitude")
      const phaseEl = qubitCircle.getElementsByClassName(
        "qubit-circle__phase",
      )[0]
      const magnitude = this.magnitudes[breakpoint][c]
      const phase = this.phases[breakpoint][c]
      const diameter = circleDiameter * magnitude

      qubitCircle.setAttribute("data-magnitude", magnitude)
      qubitCircle.setAttribute("data-phase", phase)
      phaseEl.style.transform = `rotate(${-1 * phase}deg)`

      magnitudeEl.style.width = `${diameter}px`
      magnitudeEl.style.height = `${diameter}px`

      if (magnitude > 0) {
        const phaseMagnitudeEl = qubitCircle.querySelector(
          ".qubit-circle__phase-magnitude",
        )
        phaseMagnitudeEl.style.marginTop = `${
          (circleDiameter - diameter) / 2
        }px`
        phaseMagnitudeEl.style.height = `${diameter / 2}px`
        phaseMagnitudeEl.style.width = `${diameter / 2}px`
      }
    })

    this.circleNotationController.updateTooltips()
  }

  circuitElements(step) {
    return this.circuitStepTargets[step].getElementsByClassName(
      "circuit-element",
    )
  }

  get nqubit() {
    return parseInt(this.data.get("nqubit"))
  }

  get circleNotationController() {
    return this.application.getControllerForElementAndIdentifier(
      document.getElementById("circle-notation"),
      "circle-notation",
    )
  }
}
