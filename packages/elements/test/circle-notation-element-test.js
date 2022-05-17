import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {once} from './common/once'
import {testElementCreation} from './common/test-element-creation'
import 'fastdom'

describe('circle-notation element', function () {
  testElementCreation(window.CircleNotationElement, 'circle-notation')

  describe('data-qubit-count', function () {
    let circleNotation

    beforeEach(function () {
      circleNotation = document.createElement('circle-notation')
      circleNotation.style.setProperty('width', 'auto')
      circleNotation.style.setProperty('height', 'auto')
      document.body.append(circleNotation)
      flushFastDom()
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    if (
      ('data-qubit-count="1" by default',
      function () {
        assert.equal(circleNotation.qubitCount, 1)
      })
    )
      it('data-qubit-count="1"', function () {
        circleNotation.qubitCount = 1

        flushFastDom()

        assert.equal(circleNotation.qubitCircles.length, 2)
      })

    it('data-qubit-count="2"', function () {
      circleNotation.qubitCount = 2

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 2)
    })

    it('data-qubit-count="3"', function () {
      circleNotation.qubitCount = 3

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 3)
    })

    it('data-qubit-count="4"', function () {
      circleNotation.qubitCount = 4

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 4)
    })

    it('data-qubit-count="5"', function () {
      circleNotation.qubitCount = 5

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 5)
    })

    it('data-qubit-count="6"', function () {
      circleNotation.qubitCount = 6

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 6)
    })

    it('data-qubit-count="7"', function () {
      circleNotation.qubitCount = 7

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 7)
    })

    it('data-qubit-count="8"', function () {
      circleNotation.qubitCount = 8

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 8)
    })

    it('data-qubit-count="9"', function () {
      circleNotation.qubitCount = 9

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="10"', function () {
      circleNotation.qubitCount = 10

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="11"', function () {
      circleNotation.qubitCount = 11

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="12"', function () {
      circleNotation.qubitCount = 12

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="13"', function () {
      circleNotation.qubitCount = 13

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="14"', function () {
      circleNotation.qubitCount = 14

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="15"', function () {
      circleNotation.qubitCount = 15

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })

    it('data-qubit-count="16"', function () {
      circleNotation.qubitCount = 16

      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
    })
  })
})

function flushFastDom() {
  window.fastdom.runTasks(window.fastdom.reads)
  window.fastdom.runTasks(window.fastdom.writes)
}
