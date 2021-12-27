import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "circuitColumn",
    "qubitCircleGroup",
    "qubitCircle",
  ];

  circuitColumnTargets: Array<HTMLElement>;
  qubitCircleGroupTargets: Array<HTMLElement>;
  qubitCircleTargets: Array<HTMLElement>;

  connect() {
    this.gotoBreakpoint(0);
  }

  gotoBreakpoint(breakpoint: number) {
    this.toggleCircuitColumnActive(breakpoint);
    this.toggleCircleGroupActive(breakpoint);
  }

  circuitColumnClicked(event: MouseEvent) {
    const circuitColumn = event.currentTarget as HTMLElement;
    const breakpoint = this.circuitColumnTargets.indexOf(circuitColumn);
    this.gotoBreakpoint(breakpoint);
  }

  private toggleCircuitColumnActive(breakpoint: number) {
    this.circuitColumnTargets.forEach((el: HTMLElement, i: number) => {
      if (i == breakpoint) {
        el.querySelector('.circuit-breakpoint').classList.add('circuit-breakpoint--active')
      } else {
        el.querySelector('.circuit-breakpoint').classList.remove('circuit-breakpoint--active')
      }
    })
  }

  private toggleCircleGroupActive(breakpoint: number) {
    this.qubitCircleGroupTargets.forEach((el: HTMLElement, i: number) => {
      if (i == breakpoint) {
        el.classList.remove('hidden');
        this.maybeDrawCircleGroup(el);
      } else {
        el.classList.add('hidden');
      }
    })
  }

  private maybeDrawCircleGroup(circleGroupEl: HTMLElement) {
    if (circleGroupEl.dataset.drawn == 'true') {
      return;
    }

    const qubitCircles = circleGroupEl.getElementsByClassName('qubit-circle');
    const circleDiameter = qubitCircles[0].clientWidth;

    Array.prototype.forEach.call(qubitCircles, function(el: HTMLElement) {
      var magnitude = parseFloat(el.dataset.magnitude);
      var diameter = circleDiameter * magnitude;
      var magnitudeEl = el.querySelector('.qubit-circle__magnitude');

      (magnitudeEl as HTMLElement).style.width = `${diameter}px`;
      (magnitudeEl as HTMLElement).style.height = `${diameter}px`;

      if (magnitude > 0) {
        var phaseMagnitudeEl = el.querySelector('.qubit-circle__phase-magnitude');
        (phaseMagnitudeEl as HTMLElement).style.marginTop = `${(circleDiameter - diameter) / 2}px`;
        (phaseMagnitudeEl as HTMLElement).style.height = `${diameter / 2}px`;
        (phaseMagnitudeEl as HTMLElement).style.width = `${diameter / 2}px`;
      }
    });

    circleGroupEl.dataset.drawn = 'true';
  }
}
