import '../dist/index'
import '../dist/qni.css'
import {assert} from '@esm-bundle/chai'
import {sendMouse} from '@web/test-runner-commands'
import {testElementCreation} from './common/test-element-creation'

describe('palette-dropzone element', function () {
  testElementCreation(window.PaletteDropzoneElement, 'palette-dropzone')

  describe('drag and drop', function () {
    let dropzone
    let operation

    beforeEach(function () {
      const container = document.createElement('div')
      container.innerHTML = `
  <palette-dropzone>
    <h-gate></h-gate>
  </palette-dropzone>`
      document.body.append(container)
      dropzone = document.querySelector('palette-dropzone')
      operation = document.querySelector('h-gate')
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('creates a new operation when its operation is grabbed', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})

      assert.equal(dropzone.children.length, 2)
      assert.isTrue(dropzone.children[0] instanceof window.HGateElement)
      assert.isTrue(dropzone.children[1] instanceof window.HGateElement)
    })

    it('deletes its operation when the operation is dropped', async function () {
      await sendMouse({
        type: 'move',
        position: xy(operation)
      })
      await sendMouse({type: 'down'})
      await sendMouse({type: 'move', position: [1000, 1000]})
      await sendMouse({type: 'up'})

      assert.equal(dropzone.children.length, 1)
      assert.isTrue(dropzone.children[0] instanceof window.HGateElement)
    })
  })
})

function xy(element) {
  const rect = element.getBoundingClientRect()
  const x = window.pageXOffset + rect.left + element.clientWidth / 2
  const y = window.pageYOffset + rect.top + element.clientHeight / 2
  return [x, y]
}
