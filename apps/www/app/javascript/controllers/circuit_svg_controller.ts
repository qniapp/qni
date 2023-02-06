import '@svgdotjs/svg.filter.js'
import {G, SVG, Svg} from '@svgdotjs/svg.js'
import {Controller} from '@hotwired/stimulus'

export default class CircuitSvgController extends Controller {
  static targets = ['circuitScaler', 'circuit', 'title', 'logo']

  declare circuitScalerTarget: HTMLElement
  declare circuitTarget: HTMLElement
  declare titleTarget: HTMLElement
  declare logoTarget: HTMLElement
  declare shapes: G
  declare shapeColors: string[]

  connect(): void {
    this.resizeCircuit()
    this.shapes = (SVG(this.element) as Svg).group()
    this.setColors()

    const resizeObserver = new ResizeObserver(() => {
      this.generate()
    })

    resizeObserver.observe(this.circuitTarget)
    resizeObserver.observe(this.titleTarget)
    resizeObserver.observe(this.logoTarget)
  }

  private resizeCircuit(): void {
    const width = this.circuitTarget.offsetWidth
    const height = this.circuitTarget.offsetHeight

    const scaleX = 1000.0 / width
    const scaleY = 350.0 / height
    const scale = scaleX > scaleY ? scaleY : scaleX

    this.circuitScalerTarget.style.width = `${width * scale}px`
    this.circuitScalerTarget.style.height = `${height * scale}px`

    this.circuitTarget.style.transformOrigin = 'top left'
    this.circuitTarget.style.transform = `scaleX(${scale}) scaleY(${scale})`
  }

  private generate(): void {
    this.shapes.clear()

    const htmlRects = [
      this.relativeBounds(this.element as SVGSVGElement, this.circuitTarget),
      this.relativeBounds(this.element as SVGSVGElement, this.titleTarget),
      this.relativeBounds(this.element as SVGSVGElement, this.logoTarget),
    ]

    const rects = this.generateRandomRects(htmlRects)

    for (const rect of rects.slice(3, rects.length)) {
      this.drawRandomShape(rect)
    }
  }

  private drawRandomShape(rect: {x: number; y: number; width: number; height: number}) {
    const shapeChoices = ['rect', 'ellipse', 'triangle']
    let shape

    switch (shapeChoices[~~this.random(0, shapeChoices.length)]) {
      case 'ellipse':
        shape = this.shapes.ellipse(rect.width, rect.height).x(rect.x).y(rect.y)
        break
      case 'triangle':
        shape = this.shapes
          .polygon(`0 ${rect.height}, ${rect.width / 2} 0, ${rect.width} ${rect.height}`)
          .x(rect.x)
          .y(rect.y)
        break
      default:
        shape = this.shapes.rect(rect.width, rect.height).x(rect.x).y(rect.y)
    }

    const color = this.randomColor()

    if (this.random(0, 1) > 0.25) {
      shape.fill(color)
    } else {
      shape
        .stroke({
          color,
          width: 16,
        })
        .fill('transparent')
    }

    shape.node.classList.add('shape')
    shape.rotate(this.random(0, 90)).scale(0.825)
    shape.opacity(this.random(0.5, 1))
    shape.filterWith(filter => {
      filter.gaussianBlur(30, 30)
      filter.size('200%', '200%').move('-50%', '-50%')
    })
  }

  private generateRandomRects(
    existing: Array<{
      x: number
      y: number
      width: number
      height: number
    }>,
  ) {
    const rects = [...existing]
    const tries = 250
    const maxShapes = 6

    for (let i = 0; i < tries; i++) {
      if (rects.length === maxShapes + existing.length) break

      const size = this.random(100, 600)

      const rect = {
        x: this.random(-size, 1200),
        y: this.random(-size, 630),
        width: size,
        height: size,
      }

      if (!rects.some(r => this.detectRectCollision(r, rect))) {
        rects.push(rect)
      }
    }

    return rects
  }

  private random(min: number, max: number): number {
    return Math.random() * (max - min) + min
  }

  private randomColor() {
    return this.shapeColors[~~this.random(0, this.shapeColors.length)]
  }

  private setColors() {
    const baseHue = this.random(0, 360)
    const saturation = this.random(60, 90)

    const baseColor = `hsl(${baseHue}, ${saturation}%, 60%)`
    const baseColorWhite = `hsl(${baseHue}, ${saturation}%, 97%)`
    const baseColorBlack = `hsl(${baseHue}, 95%, 3%)`

    const complimentaryColor1 = `hsl(${baseHue + 90}, ${saturation}%, 60%)`
    const complimentaryColor2 = `hsl(${baseHue + 180}, ${saturation}%, 60%)`

    this.shapeColors = [complimentaryColor1, complimentaryColor2, baseColor]

    const svgEl = this.element as SVGElement
    svgEl.style.background = baseColorWhite
    svgEl.style.color = baseColorBlack
  }

  private detectRectCollision(
    rect1: {
      x: number
      y: number
      width: number
      height: number
    },
    rect2: {
      x: number
      y: number
      width: number
      height: number
    },
    padding = 32,
  ) {
    return (
      rect1.x < rect2.x + rect2.width + padding &&
      rect1.x + rect1.width + padding > rect2.x &&
      rect1.y < rect2.y + rect2.height + padding &&
      rect1.y + rect1.height + padding > rect2.y
    )
  }

  private relativeBounds(
    svg: SVGSVGElement,
    element: HTMLElement,
  ): {
    x: number
    y: number
    width: number
    height: number
  } {
    const {x, y, width, height} = element.getBoundingClientRect()

    const startPoint = svg.createSVGPoint()
    startPoint.x = x
    startPoint.y = y

    const endPoint = svg.createSVGPoint()
    endPoint.x = x + width
    endPoint.y = y + height

    const startPointTransformed = startPoint.matrixTransform(svg.getScreenCTM()!.inverse())
    const endPointTransformed = endPoint.matrixTransform(svg.getScreenCTM()!.inverse())

    return {
      x: startPointTransformed.x,
      y: startPointTransformed.y,
      width: endPointTransformed.x - startPointTransformed.x,
      height: endPointTransformed.y - startPointTransformed.y,
    }
  }
}
