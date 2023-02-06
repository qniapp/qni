import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('circuit-step element', function () {
  testElementCreation(window.CircuitStepElement, 'circuit-step')

  describe('maxOccupiedDropzoneBit', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('returns the number of qubits 0', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')

      assert.equal(step.maxOccupiedDropzoneBit, 0)
    })

    it('returns the number of qubits 1', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')

      assert.equal(step.maxOccupiedDropzoneBit, 1)
    })

    it('If a Resizeable gate is included, returns the number of qubits added to the its span', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <qft-gate data-span="3"></qft-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')

      assert.equal(step.maxOccupiedDropzoneBit, 3)
    })
  })

  describe('update connections', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      const controlGate = document.querySelector('control-gate')
      assert.isTrue(controlGate.disabled)
    })

    it('•-•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && !dropzones[1].connectBottom)
    })

    it('•-•-1-•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && dropzones[1].connectBottom)
      assert.isTrue(dropzones[2].connectTop && dropzones[2].connectBottom)
      assert.isTrue(dropzones[3].connectTop && !dropzones[3].connectBottom)
    })

    it('P(π/2)-P(π/2)', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
      assert.isTrue(step.dropzoneAt(1).connectTop && !step.dropzoneAt(1).connectBottom)
    })

    it('P(π/2)-P(π)', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && !dropzones[0].connectBottom)
      assert.isTrue(!dropzones[1].connectTop && !dropzones[1].connectBottom)
    })

    it('H-•-1-H', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateOperationAttributes()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && dropzones[1].connectBottom)
      assert.isTrue(dropzones[2].connectTop && dropzones[2].connectBottom)
      assert.isTrue(dropzones[3].connectTop && !dropzones[3].connectBottom)
    })
  })

  describe('serialize', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    describe('H', function () {
      it('H', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0]}])
      })

      it('H-H', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0, 1]}])
      })

      it('H-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0], controls: [1]}])
      })

      it('H-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0], controls: [1, 2]}])
      })

      it('H-H-• (disable CH)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCh: true})

        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0, 1]}])
      })

      it('H(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0], if: 'foo'}])
      })

      it('H(if foo)-H(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'H', targets: [0, 1], if: 'foo'}])
      })

      it('H(if foo)-H(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate data-if="bar"></h-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'H', targets: [0], if: 'foo'},
          {type: 'H', targets: [1], if: 'bar'},
        ])
      })

      it('H-H(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'H', targets: [0], controls: [2]},
          {type: 'H', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('H-H(if foo)-• (disable CH)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate data-if="foo"></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCh: true})

        assert.deepEqual(step.serialize(), [
          {type: 'H', targets: [0]},
          {type: 'H', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('X', function () {
      afterEach(function () {
        document.body.textContent = ''
      })

      it('X', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0]}])
      })

      it('X-X', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0, 1]}])
      })

      it('X-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0], controls: [1]}])
      })

      it('X-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0], controls: [1, 2]}])
      })

      it('X-X-• (disable CNOT)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCnot: true})

        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0, 1]}])
      })

      it('X(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0], if: 'foo'}])
      })

      it('X(if foo)-X(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X', targets: [0, 1], if: 'foo'}])
      })

      it('X(if foo)-X(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate data-if="bar"></x-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'X', targets: [0], if: 'foo'},
          {type: 'X', targets: [1], if: 'bar'},
        ])
      })

      it('X-X(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'X', targets: [0], controls: [2]},
          {type: 'X', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('X-X(if foo)-• (disable CNOT)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <x-gate data-if="foo"></x-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCnot: true})

        assert.deepEqual(step.serialize(), [
          {type: 'X', targets: [0]},
          {type: 'X', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Y', function () {
      it('Y', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0]}])
      })

      it('Y-Y', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0, 1]}])
      })

      it('Y-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0], controls: [1]}])
      })

      it('Y-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0], controls: [1, 2]}])
      })

      it('Y-Y-• (disable CY)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCy: true})

        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0, 1]}])
      })

      it('Y(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0], if: 'foo'}])
      })

      it('Y(if foo)-Y(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0, 1], if: 'foo'}])
      })

      it('Y(if foo)-Y(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate data-if="bar"></y-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Y', targets: [0], if: 'foo'},
          {type: 'Y', targets: [1], if: 'bar'},
        ])
      })

      it('Y-Y(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Y', targets: [0], controls: [2]},
          {type: 'Y', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Y-Y(if foo)-• (disable CY)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <y-gate data-if="foo"></y-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCy: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Y', targets: [0]},
          {type: 'Y', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Z', function () {
      it('Z', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0]}])
      })

      it('Z-Z', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0, 1]}])
      })

      it('Z-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0], controls: [1]}])
      })

      it('Z-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0], controls: [1, 2]}])
      })

      it('Z-Z-• (disable CZ)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCz: true})

        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0, 1]}])
      })

      it('Z(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0], if: 'foo'}])
      })

      it('Z(if foo)-Z(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0, 1], if: 'foo'}])
      })

      it('Z(if foo)-Z(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate data-if="bar"></z-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Z', targets: [0], if: 'foo'},
          {type: 'Z', targets: [1], if: 'bar'},
        ])
      })

      it('Z-Z(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Z', targets: [0], controls: [2]},
          {type: 'Z', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Z-Z(if foo)-• (disable CZ)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <z-gate data-if="foo"></z-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCz: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Z', targets: [0]},
          {type: 'Z', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('P', function () {
      it('P', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0]}])
      })

      it('P(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0]}])
      })

      it('P-P', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0, 1]}])
      })

      it('P(π)-P(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0, 1]}])
      })

      it('P(π)-P(π/2)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0]},
          {type: 'P', angle: 'π/2', targets: [1]},
        ])
      })

      it('P-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0], controls: [1]}])
      })

      it('P(π)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0], controls: [1]}])
      })

      it('P-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0], controls: [1, 2]}])
      })

      it('P(π)-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0], controls: [1, 2]}])
      })

      it('P-P-• (disable Cphase)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCphase: true})

        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0, 1]}])
      })

      it('P(π)-P(π)-• (disable Cphase)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCphase: true})

        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0, 1]}])
      })

      it('P(π)-P(π/2)-• (disable Cphase)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCphase: true})

        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0]},
          {type: 'P', angle: 'π/2', targets: [1]},
        ])
      })

      it('P(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0], if: 'foo'}])
      })

      it('P(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0], if: 'foo'}])
      })

      it('P(if foo)-P(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', targets: [0, 1], if: 'foo'}])
      })

      it('P(π if foo)-P(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'P', angle: 'π', targets: [0, 1], if: 'foo'}])
      })

      it('P(π if foo)-P(π/2 if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π/2" data-if="foo"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0], if: 'foo'},
          {type: 'P', angle: 'π/2', targets: [1], if: 'foo'},
        ])
      })

      it('P(if foo)-P(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-if="bar"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'P', targets: [0], if: 'foo'},
          {type: 'P', targets: [1], if: 'bar'},
        ])
      })

      it('P(π if foo)-P(π if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="bar"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0], if: 'foo'},
          {type: 'P', angle: 'π', targets: [1], if: 'bar'},
        ])
      })

      it('P-P(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'P', targets: [0], controls: [2]},
          {type: 'P', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('P(π)-P(π if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0], controls: [2]},
          {type: 'P', angle: 'π', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('P-P(if foo)-• (disable Cphase)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCphase: true})

        assert.deepEqual(step.serialize(), [
          {type: 'P', targets: [0]},
          {type: 'P', targets: [1], if: 'foo'},
        ])
      })

      it('P(π)-P(π if foo)-• (disable Cphase)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π" data-if="foo"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCphase: true})

        assert.deepEqual(step.serialize(), [
          {type: 'P', angle: 'π', targets: [0]},
          {type: 'P', angle: 'π', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('√X', function () {
      it('√X', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0]}])
      })

      it('√X-√X', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0, 1]}])
      })

      it('√X-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0], controls: [1]}])
      })

      it('√X-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0], controls: [1, 2]}])
      })

      it('√X-√X-• (disable CRNOT)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrnot: true})

        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0, 1]}])
      })

      it('√X(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0], if: 'foo'}])
      })

      it('√X(if foo)-√X(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0, 1], if: 'foo'}])
      })

      it('√X(if foo)-√X(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate data-if="bar"></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'X^½', targets: [0], if: 'foo'},
          {type: 'X^½', targets: [1], if: 'bar'},
        ])
      })

      it('√X-√X(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'X^½', targets: [0], controls: [2]},
          {type: 'X^½', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('√X-√X(if foo)-• (disable CRNOT)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rnot-gate data-if="foo"></rnot-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrnot: true})

        assert.deepEqual(step.serialize(), [
          {type: 'X^½', targets: [0]},
          {type: 'X^½', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Rx', function () {
      it('Rx', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0]}])
      })

      it('Rx(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0]}])
      })

      it('Rx-Rx', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0, 1]}])
      })

      it('Rx(π)-Rx(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0, 1]}])
      })

      it('Rx(π)-Rx(π/2)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π/2"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0]},
          {type: 'Rx', angle: 'π/2', targets: [1]},
        ])
      })

      it('Rx-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0], controls: [1]}])
      })

      it('Rx(π)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0], controls: [1]}])
      })

      it('Rx-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0], controls: [1, 2]}])
      })

      it('Rx(π)-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0], controls: [1, 2]}])
      })

      it('Rx-Rx-• (disable CRx)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrx: true})

        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0, 1]}])
      })

      it('Rx(π)-Rx(π)-• (disable CRx)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrx: true})

        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0, 1]}])
      })

      it('Rx(π)-Rx(π/2)-• (disable CRx)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π/2"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrx: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0]},
          {type: 'Rx', angle: 'π/2', targets: [1]},
        ])
      })

      it('Rx(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0], if: 'foo'}])
      })

      it('Rx(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0], if: 'foo'}])
      })

      it('Rx(if foo)-Rx(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0, 1], if: 'foo'}])
      })

      it('Rx(π if foo)-Rx(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rx', angle: 'π', targets: [0, 1], if: 'foo'}])
      })

      it('Rx(π if foo)-Rx(π/2 if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π/2" data-if="foo"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Rx', angle: 'π/2', targets: [1], if: 'foo'},
        ])
      })

      it('Rx(if foo)-Rx(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-if="bar"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rx', targets: [0], if: 'foo'},
          {type: 'Rx', targets: [1], if: 'bar'},
        ])
      })

      it('Rx(π if foo)-Rx(π if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="bar"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Rx', angle: 'π', targets: [1], if: 'bar'},
        ])
      })

      it('Rx-Rx(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Rx', targets: [0], controls: [2]},
          {type: 'Rx', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Rx(π)-Rx(π if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0], controls: [2]},
          {type: 'Rx', angle: 'π', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Rx-Rx(if foo)-• (disable CRx)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrx: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rx', targets: [0]},
          {type: 'Rx', targets: [1], if: 'foo'},
        ])
      })

      it('Rx(π)-Rx(π if foo)-• (disable CRx)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-angle="π"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rx-gate data-angle="π" data-if="foo"></rx-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrx: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rx', angle: 'π', targets: [0]},
          {type: 'Rx', angle: 'π', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Ry', function () {
      it('Ry', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0]}])
      })

      it('Ry(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0]}])
      })

      it('Ry-Ry', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0, 1]}])
      })

      it('Ry(π)-Ry(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0, 1]}])
      })

      it('Ry(π)-Ry(π/2)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π/2"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0]},
          {type: 'Ry', angle: 'π/2', targets: [1]},
        ])
      })

      it('Ry-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0], controls: [1]}])
      })

      it('Ry(π)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0], controls: [1]}])
      })

      it('Ry-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0], controls: [1, 2]}])
      })

      it('Ry(π)-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0], controls: [1, 2]}])
      })

      it('Ry-Ry-• (disable CRy)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCry: true})

        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0, 1]}])
      })

      it('Ry(π)-Ry(π)-• (disable CRy)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCry: true})

        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0, 1]}])
      })

      it('Ry(π)-Ry(π/2)-• (disable CRy)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π/2"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCry: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0]},
          {type: 'Ry', angle: 'π/2', targets: [1]},
        ])
      })

      it('Ry(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0], if: 'foo'}])
      })

      it('Ry(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0], if: 'foo'}])
      })

      it('Ry(if foo)-Ry(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0, 1], if: 'foo'}])
      })

      it('Ry(π if foo)-Ry(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Ry', angle: 'π', targets: [0, 1], if: 'foo'}])
      })

      it('Ry(π if foo)-Ry(π/2 if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π/2" data-if="foo"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Ry', angle: 'π/2', targets: [1], if: 'foo'},
        ])
      })

      it('Ry(if foo)-Ry(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-if="bar"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Ry', targets: [0], if: 'foo'},
          {type: 'Ry', targets: [1], if: 'bar'},
        ])
      })

      it('Ry(π if foo)-Ry(π if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="bar"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Ry', angle: 'π', targets: [1], if: 'bar'},
        ])
      })

      it('Ry-Ry(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Ry', targets: [0], controls: [2]},
          {type: 'Ry', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Ry(π)-Ry(π if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0], controls: [2]},
          {type: 'Ry', angle: 'π', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Ry-Ry(if foo)-• (disable CRy)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCry: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Ry', targets: [0]},
          {type: 'Ry', targets: [1], if: 'foo'},
        ])
      })

      it('Ry(π)-Ry(π if foo)-• (disable CRy)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-angle="π"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <ry-gate data-angle="π" data-if="foo"></ry-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCry: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Ry', angle: 'π', targets: [0]},
          {type: 'Ry', angle: 'π', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Rz', function () {
      it('Rz', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0]}])
      })

      it('Rz(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0]}])
      })

      it('Rz-Rz', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0, 1]}])
      })

      it('Rz(π)-Rz(π)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0, 1]}])
      })

      it('Rz(π)-Rz(π/2)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π/2"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0]},
          {type: 'Rz', angle: 'π/2', targets: [1]},
        ])
      })

      it('Rz-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0], controls: [1]}])
      })

      it('Rz(π)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0], controls: [1]}])
      })

      it('Rz-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0], controls: [1, 2]}])
      })

      it('Rz(π)-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0], controls: [1, 2]}])
      })

      it('Rz-Rz-• (disable CRz)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrz: true})

        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0, 1]}])
      })

      it('Rz(π)-Rz(π)-• (disable CRz)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrz: true})

        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0, 1]}])
      })

      it('Rz(π)-Rz(π/2)-• (disable CRz)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π/2"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrz: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0]},
          {type: 'Rz', angle: 'π/2', targets: [1]},
        ])
      })

      it('Rz(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0], if: 'foo'}])
      })

      it('Rz(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0], if: 'foo'}])
      })

      it('Rz(if foo)-Rz(if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0, 1], if: 'foo'}])
      })

      it('Rz(π if foo)-Rz(π if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Rz', angle: 'π', targets: [0, 1], if: 'foo'}])
      })

      it('Rz(π if foo)-Rz(π/2 if foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π/2" data-if="foo"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Rz', angle: 'π/2', targets: [1], if: 'foo'},
        ])
      })

      it('Rz(if foo)-Rz(if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-if="bar"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rz', targets: [0], if: 'foo'},
          {type: 'Rz', targets: [1], if: 'bar'},
        ])
      })

      it('Rz(π if foo)-Rz(π if bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="bar"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0], if: 'foo'},
          {type: 'Rz', angle: 'π', targets: [1], if: 'bar'},
        ])
      })

      it('Rz-Rz(if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Rz', targets: [0], controls: [2]},
          {type: 'Rz', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Rz(π)-Rz(π if foo)-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0], controls: [2]},
          {type: 'Rz', angle: 'π', targets: [1], controls: [2], if: 'foo'},
        ])
      })

      it('Rz-Rz(if foo)-• (disable CRz)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrz: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rz', targets: [0]},
          {type: 'Rz', targets: [1], if: 'foo'},
        ])
      })

      it('Rz(π)-Rz(π if foo)-• (disable CRz)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-angle="π"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <rz-gate data-angle="π" data-if="foo"></rz-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCrz: true})

        assert.deepEqual(step.serialize(), [
          {type: 'Rz', angle: 'π', targets: [0]},
          {type: 'Rz', angle: 'π', targets: [1], if: 'foo'},
        ])
      })
    })

    describe('Swap', function () {
      it('Swap', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [])
      })

      it('Swap-Swap', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1]}])
      })

      it('Swap-Swap (disableSwap: true)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableSwap: true})

        assert.deepEqual(step.serialize(), [])
      })

      it('Swap-Swap-Swap', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [])
      })

      it('Swap-Swap-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1], controls: [2]}])
      })

      it('Swap-Swap-• (disableCswap: true)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableCswap: true})

        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1]}])
      })

      it('Swap-Swap-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1], controls: [2, 3]}])
      })

      it('Swap-Swap-•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes()

        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1], controls: [2, 3]}])
      })

      it('Swap-Swap-•-• (maxCswapControlGates: 1)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <swap-gate></swap-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({maxCswapControlGates: 1})

        assert.deepEqual(step.serialize(), [{type: 'Swap', targets: [0, 1], controls: [2]}])
      })
    })

    describe('Control', function () {
      it('•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [])
      })

      it('•-•', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: '•', targets: [0, 1]}])
      })

      it('•-• (disableControlControl: true)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({disableControlControl: true})

        assert.deepEqual(step.serialize(), [])
      })

      it('•-•-• (maxControlControlTargetGates: 2)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)
        const step = document.querySelector('circuit-step')
        step.updateOperationAttributes({maxControlControlTargetGates: 2})

        assert.deepEqual(step.serialize(), [{type: '•', targets: [0, 1]}])
      })
    })

    describe('Bloch', function () {
      it('Bloch', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <bloch-display></bloch-display>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Bloch', targets: [0]}])
      })

      it('Bloch-Bloch', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <bloch-display></bloch-display>
  </circuit-dropzone>
  <circuit-dropzone>
    <bloch-display></bloch-display>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Bloch', targets: [0, 1]}])
      })
    })

    describe('|0>', function () {
      it('|0>', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="0"></write-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: '|0>', targets: [0]}])
      })

      it('|0>-|0>', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="0"></write-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <write-gate data-value="0"></write-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: '|0>', targets: [0, 1]}])
      })
    })

    describe('|1>', function () {
      it('|1>', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="1"></write-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: '|1>', targets: [0]}])
      })

      it('|1>-|1>', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="1"></write-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <write-gate data-value="1"></write-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: '|1>', targets: [0, 1]}])
      })
    })

    describe('Measure', function () {
      it('M', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <measurement-gate></measurement-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Measure', targets: [0]}])
      })

      it('M(flag = foo)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <measurement-gate data-flag="foo"></measurement-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Measure', targets: [0], flag: 'foo'}])
      })

      it('M-M', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <measurement-gate></measurement-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <measurement-gate></measurement-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [{type: 'Measure', targets: [0, 1]}])
      })

      it('M(flag = foo)-M(flag = bar)', function () {
        const container = document.createElement('div')
        container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <measurement-gate data-flag="foo"></measurement-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <measurement-gate data-flag="bar"></measurement-gate>
  </circuit-dropzone>
</circuit-step>`
        document.body.append(container)

        const step = document.querySelector('circuit-step')
        assert.deepEqual(step.serialize(), [
          {type: 'Measure', targets: [0], flag: 'foo'},
          {type: 'Measure', targets: [1], flag: 'bar'},
        ])
      })
    })
  })
})
