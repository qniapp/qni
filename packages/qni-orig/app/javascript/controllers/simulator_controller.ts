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

  // TODO: gotoBreakpoint() との共通点をメソッドに切り出す
  connect() {
    this.toggleCircuitColumnActive(0);
    this.toggleCircleGroupActive(0);
  }

  gotoBreakpoint(event: MouseEvent) {
    const circuitColumn = event.currentTarget as HTMLElement;

    this.circuitColumnTargets.forEach((el: HTMLElement, i: number) => {
      if (el.isEqualNode(circuitColumn)) {
        this.toggleCircuitColumnActive(i);
        this.toggleCircleGroupActive(i);
      }
    })
  }

  private toggleCircuitColumnActive(breakpoint: number) {
    this.circuitColumnTargets.forEach((el: HTMLElement, i: number) => {
      if (i == breakpoint) {
        el.classList.add('circuit-column--active');
      } else {
        el.classList.remove('circuit-column--active');
      }
    })
  }

  private toggleCircleGroupActive(breakpoint: number) {
    this.qubitCircleGroupTargets.forEach((el: HTMLElement, i: number) => {
      if (i == breakpoint) {
        el.classList.remove('hidden');
        this.showCircleGroup(el);
      } else {
        el.classList.add('hidden');
      }
    })
  }

  private showCircleGroup(circleGroupEl: HTMLElement) {
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
  }
}
