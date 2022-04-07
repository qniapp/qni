import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {once} from './common/once'
import {testElementCreation} from './common/test-element-creation'

describe('angle-slider element', function () {
  describe('element creation', function () {
    testElementCreation(window.AngleSliderElement, 'angle-slider')
  })

  describe('attributes', function () {
    let angleSlider

    beforeEach(function () {
      const container = document.createElement('div')
      container.innerHTML = `<angle-slider></angle-slider>`
      document.body.append(container)
      angleSlider = document.querySelector('angle-slider')
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    describe('angle attribute', function () {
      it('setting the angle attribute will also update the other attributes', function () {
        angleSlider.angle = 'π/2'

        assert.equal(angleSlider.denominator, 2)
        assert.equal(angleSlider.radian, Math.PI / 2)
      })

      it('setting the angle attribute will dispatch the angle-slider-update event', async function () {
        const updateEvent = once(angleSlider, 'angle-slider-update')
        angleSlider.angle = 'π/2'
        await updateEvent

        assert.equal(angleSlider.angle, 'π/2')
      })
    })

    describe('denominator attribute', function () {
      it('setting the denominator attribute will also update the other attributes', function () {
        angleSlider.angle = 'π/2'

        angleSlider.denominator = 4

        assert.equal(angleSlider.angle, '2π/4')
        assert.equal(angleSlider.denominator, 4)
        assert.equal(angleSlider.radian, Math.PI / 2)
      })

      it('setting the denominator attribute will dispatch the angle-slider-update event', async function () {
        angleSlider.angle = 'π/2'

        const updateEvent = once(angleSlider, 'angle-slider-update')
        angleSlider.denominator = 4
        await updateEvent

        assert.equal(angleSlider.angle, '2π/4')
      })
    })
  })
})
