import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["circuitColumn", "qubitCircleGroup", "qubitCircle"];

  connect() {
    this.gotoBreakpoint(0)
  }

  gotoBreakpoint(breakpoint) {
    this.toggleCircuitColumnActive(breakpoint)
    this.toggleCircleGroupActive(breakpoint)
  }

  circuitColumnClicked(event) {
    const circuitColumn = event.currentTarget
    const breakpoint = this.circuitColumnTargets.indexOf(circuitColumn)
    this.gotoBreakpoint(breakpoint)
  }

  toggleCircuitColumnActive(breakpoint) {
    this.circuitColumnTargets.forEach((el, i) => {
      if (i == breakpoint) {
        el.querySelector(".circuit-breakpoint").classList.add(
          "circuit-breakpoint--active",
        )
      } else {
        el.querySelector(".circuit-breakpoint").classList.remove(
          "circuit-breakpoint--active",
        )
      }
    })
  }

  toggleCircleGroupActive(breakpoint) {
    this.qubitCircleGroupTargets.forEach((el, i) => {
      if (i == breakpoint) {
        el.classList.remove("hidden")
        this.maybeDrawCircleGroup(el)
      } else {
        el.classList.add("hidden")
      }
    })
  }

  maybeDrawCircleGroup(circleGroupEl) {
    if (circleGroupEl.dataset.drawn == "true") {
      return
    }

    const qubitCircles = circleGroupEl.getElementsByClassName("qubit-circle")
    const circleDiameter = qubitCircles[0].clientWidth

    Array.prototype.forEach.call(qubitCircles, function (el) {
      var magnitude = parseFloat(el.dataset.magnitude)
      var diameter = circleDiameter * magnitude
      var magnitudeEl = el.querySelector(".qubit-circle__magnitude")

      magnitudeEl.style.width = `${diameter}px`
      magnitudeEl.style.height = `${diameter}px`

      if (magnitude > 0) {
        var phaseMagnitudeEl = el.querySelector(
          ".qubit-circle__phase-magnitude",
        )
        phaseMagnitudeEl.style.marginTop = `${
          (circleDiameter - diameter) / 2
        }px`
        phaseMagnitudeEl.style.height = `${diameter / 2}px`
        phaseMagnitudeEl.style.width = `${diameter / 2}px`
      }
    })

    circleGroupEl.dataset.drawn = "true"
  }
}
