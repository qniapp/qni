import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('gate-carousel element', function () {
  testElementCreation(window.GateCarouselElement, 'gate-carousel')

  afterEach(function () {
    document.body.textContent = ''
  })

  it('connects and renders carousel controls', function () {
    const el = document.createElement('gate-carousel')
    el.innerHTML = `
      <div data-targets="gate-carousel.gateSets">
        <div><h-gate></h-gate></div>
      </div>
    `

    document.body.append(el)

    assert.instanceOf(el, window.GateCarouselElement)
    assert.exists(el.shadowRoot.querySelector('#content-clipper'))
    assert.exists(el.shadowRoot.querySelector('#prev-button'))
    assert.exists(el.shadowRoot.querySelector('#next-button'))
  })
})
