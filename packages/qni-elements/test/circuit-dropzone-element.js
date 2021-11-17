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
      el.setAttribute('data-wire-top', '')

      const wireTopSvg = el.shadowRoot.querySelector('#wire-top')

      assert.isNotNull(wireTopSvg)
    })

    it('connects to upper bit', function () {
      const el = document.createElement('circuit-dropzone')
      document.body.append(el)
      el.setAttribute('data-wire-bottom', '')

      const wireBottomSvg = el.shadowRoot.querySelector('#wire-bottom')

      assert.isNotNull(wireBottomSvg)
    })
  })

  describe('operation', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('no circuit-dropzone[data-occupied]', function () {
      const dropzone = document.createElement('circuit-dropzone')

      assert.isFalse(dropzone.hasAttribute('data-occupied'))
    })

    it('circuit-dropzone[data-occupied]', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-dropzone>
  <h-gate></h-gate>
</circuit-dropzone>`
      document.body.append(container)

      const dropzone = document.querySelector('circuit-dropzone')
      assert.isTrue(dropzone.hasAttribute('data-occupied'))
    })
  })
})
