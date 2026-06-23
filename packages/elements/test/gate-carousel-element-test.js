import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('gate-carousel element', function () {
  testElementCreation(window.GateCarouselElement, 'gate-carousel')

  afterEach(function () {
    document.body.textContent = ''
  })

  it('connects and renders carousel controls', function () {
    const el = buildGateCarousel()

    document.body.append(el)

    assert.instanceOf(el, window.GateCarouselElement)
    assert.exists(el.shadowRoot.querySelector('#content-clipper'))
    assert.exists(el.shadowRoot.querySelector('#prev-button'))
    assert.exists(el.shadowRoot.querySelector('#next-button'))
  })

  it('removes window load listener when disconnected', function () {
    const el = buildGateCarousel()
    let animationStartCount = 0
    el.startAnimation = () => {
      animationStartCount += 1
    }

    document.body.append(el)
    el.remove()
    window.dispatchEvent(new Event('load'))

    assert.equal(animationStartCount, 0)
  })
})

function buildGateCarousel() {
  const el = document.createElement('gate-carousel')
  el.innerHTML = `
    <div data-targets="gate-carousel.gateSets">
      <div><h-gate></h-gate></div>
    </div>
  `

  return el
}
