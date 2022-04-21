import '../dist/index'
import '../dist/qni.css'
import {resetMouse, sendMouse} from '@web/test-runner-commands'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('circuit-dropzone element', function () {
  testElementCreation(window.CircuitDropzoneElement, 'circuit-dropzone')

  describe('states', function () {
    afterEach(async function () {
      document.body.textContent = ''
      await resetMouse()
    })

    it('should reach "empty" when it does not have an operation', function () {
      const container = document.createElement('div')
      container.innerHTML = `<circuit-dropzone></circuit-dropzone>`
      document.body.append(container)
      const dropzone = document.querySelector('circuit-dropzone')

      assert.isFalse(dropzone.occupied)
      assert.equal(dropzone.circuitDropzoneService.state.value, 'empty')
      assert.equal(dropzone.operationName, '')
    })

    it('should reach "occupied" when it has an operation', function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-dropzone>
      <h-gate></h-gate>
    </circuit-dropzone>`
      document.body.append(container)
      const dropzone = document.querySelector('circuit-dropzone')

      assert.isTrue(dropzone.occupied)
      assert.equal(dropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(dropzone.operationName, 'h-gate')
    })

    it('should reach "occupied" when an operation is put', function () {
      const container = document.createElement('div')
      container.innerHTML = `<circuit-dropzone></circuit-dropzone>`
      document.body.append(container)
      const dropzone = document.querySelector('circuit-dropzone')

      dropzone.put(new window.HGateElement())

      assert.isTrue(dropzone.occupied)
      assert.equal(dropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(dropzone.operationName, 'h-gate')
    })

    it('should reach "snapped" when hovering an operation over it', async function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>

      <quantum-circuit data-target="circuit-editor.circuit">
        <circuit-step>
          <circuit-dropzone></circuit-dropzone>
        </circuit-step>
      </quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      const operation = document.querySelector('h-gate')
      const dropzone = document.querySelector('circuit-dropzone')

      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(dropzone)})

      assert.equal(dropzone.circuitDropzoneService.state.value, 'snapped')
      assert.equal(dropzone.operationName, 'h-gate')
    })

    it('should reach "empty" given "snapped" when moving its operation away', async function () {
      document.body.textContent = ''

      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>

      <quantum-circuit data-target="circuit-editor.circuit">
        <circuit-step>
          <circuit-dropzone></circuit-dropzone>
        </circuit-step>
      </quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      const operation = document.querySelector('h-gate')
      const dropzone = document.querySelector('circuit-dropzone')
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(dropzone)})

      await sendMouse({type: 'move', position: [1000, 1000]})

      assert.equal(dropzone.circuitDropzoneService.state.value, 'empty')
      assert.equal(dropzone.operationName, '')
    })

    it('should reach "occupied" when drag & drop an operation onto it', async function () {
      document.body.textContent = ''

      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>

      <quantum-circuit data-target="circuit-editor.circuit">
        <circuit-step>
          <circuit-dropzone></circuit-dropzone>
        </circuit-step>
      </quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      const operation = document.querySelector('h-gate')
      const dropzone = document.querySelector('circuit-dropzone')

      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(dropzone)})
      await sendMouse({type: 'up'})

      assert.equal(dropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(dropzone.operationName, 'h-gate')
    })
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
})

function xy(element) {
  const rect = element.getBoundingClientRect()
  const x = window.pageXOffset + rect.left + element.clientWidth / 2
  const y = window.pageYOffset + rect.top + element.clientHeight / 2
  return [x, y]
}
