/* eslint-env qunit */

import {DetailedError} from 'lib/detailedError'

class ReentrantDescription {
  toString() {
    return new DetailedError('re-enter', this).details
  }
}

QUnit.module('DetailedError', () => {
  QUnit.test('.details', assert => {
    assert.equal(
      new DetailedError('test', new ReentrantDescription()).details,
      '(failed to describe detailsObj due to possibly re-entrancy)'
    )
  })
})
