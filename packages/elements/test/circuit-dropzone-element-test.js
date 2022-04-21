import '../dist/index'
import '../dist/qni.css'
import {resetMouse, sendMouse} from '@web/test-runner-commands'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('circuit-dropzone element', function () {
  testElementCreation(window.CircuitDropzoneElement, 'circuit-dropzone')

  describe('initial states', function () {
    afterEach(async function () {
      document.body.textContent = ''
      await resetMouse()
    })

    it('should reach "empty" when it does not have an operation', function () {
      const container = document.createElement('div')
      container.innerHTML = `<circuit-dropzone></circuit-dropzone>`
      document.body.append(container)
      const circuitDropzone = document.querySelector('circuit-dropzone')

      assert.isFalse(circuitDropzone.occupied)
      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'empty')
      assert.equal(circuitDropzone.operationName, '')
    })

    it('should reach "occupied" when it has an operation', function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-dropzone>
      <h-gate></h-gate>
    </circuit-dropzone>`
      document.body.append(container)
      const circuitDropzone = document.querySelector('circuit-dropzone')

      assert.isTrue(circuitDropzone.occupied)
      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(circuitDropzone.operationName, 'h-gate')
    })
  })

  describe('state transitions', function () {
    let circuitDropzone
    let operation

    beforeEach(function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>

      <quantum-circuit data-target="circuit-editor.circuit">
        <circuit-dropzone></circuit-dropzone>
      </quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      operation = document.querySelector('h-gate')
      circuitDropzone = document.querySelector('circuit-dropzone')
    })

    afterEach(async function () {
      document.body.textContent = ''
      await resetMouse()
    })

    it('should reach "occupied" when put an operation on it', function () {
      circuitDropzone.put(new window.HGateElement())

      assert.isTrue(circuitDropzone.occupied)
      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(circuitDropzone.operationName, 'h-gate')
    })

    it('should reach "snapped" when hovering an operation over it', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(circuitDropzone)})

      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'snapped')
      assert.equal(circuitDropzone.operationName, 'h-gate')
    })

    it('should reach "empty" given "snapped" when move its operation away', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(circuitDropzone)})

      await sendMouse({type: 'move', position: [1000, 1000]})

      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'empty')
      assert.equal(circuitDropzone.operationName, '')
    })

    it('should reach "occupied" when drag & drop an operation onto it', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(circuitDropzone)})
      await sendMouse({type: 'up'})

      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'occupied')
      assert.equal(circuitDropzone.operationName, 'h-gate')
    })

    it('should reach "empty" when delete its operation', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: xy(circuitDropzone)})
      await sendMouse({type: 'up'})

      operation.dispatchEvent(new Event('operation-delete', {bubbles: true}))

      assert.equal(circuitDropzone.circuitDropzoneService.state.value, 'empty')
      assert.equal(circuitDropzone.operation, null)
      assert.equal(circuitDropzone.operationName, '')
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
