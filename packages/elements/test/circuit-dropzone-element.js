import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('circuit-dropzone element', function () {
  describe('element creation', function () {
    testElementCreation(window.CircuitDropzoneElement, 'circuit-dropzone')
  })

  describe('wireable', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('connects to lower bit', function () {
      const el = document.createElement('circuit-dropzone')
      document.body.append(el)
      el.setAttribute('data-connect-top', '')

      const connectTopSvg = el.shadowRoot.querySelector('#connect-top')

      assert.isNotNull(connectTopSvg)
    })

    it('connects to upper bit', function () {
      const el = document.createElement('circuit-dropzone')
      document.body.append(el)
      el.setAttribute('data-connect-bottom', '')

      const connectBottomSvg = el.shadowRoot.querySelector('#connect-bottom')

      assert.isNotNull(connectBottomSvg)
    })
  })

  describe('operation', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('not occupied', function () {
      const dropzone = document.createElement('circuit-dropzone')

      assert.isFalse(dropzone.occupied)
    })

    it('occupied', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-dropzone>
  <h-gate></h-gate>
</circuit-dropzone>`
      document.body.append(container)

      const dropzone = document.querySelector('circuit-dropzone')
      assert.isTrue(dropzone.occupied)
    })
  })
})
