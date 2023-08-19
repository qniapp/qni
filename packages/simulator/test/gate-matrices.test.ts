import {H, X, Y, Z, S} from '../src/gate-matrices'

describe('H', () => {
  test('toString', () => {
    expect(H.toString()).toBe('{{√½, √½}, {√½, -√½}}')
  })

  test('isHermitian', () => {
    expect(H.isHermitian()).toBeTruthy()
  })
})

describe('X', () => {
  test('toString', () => {
    expect(X.toString()).toBe('{{0, 1}, {1, 0}}')
  })

  test('isHermitian', () => {
    expect(X.isHermitian()).toBeTruthy()
  })
})

describe('Y', () => {
  test('toString', () => {
    expect(Y.toString()).toBe('{{0, -i}, {i, 0}}')
  })

  test('isHermitian', () => {
    expect(Y.isHermitian()).toBeTruthy()
  })
})

describe('Z', () => {
  test('toString', () => {
    expect(Z.toString()).toBe('{{1, 0}, {0, -1}}')
  })

  test('isHermitian', () => {
    expect(Z.isHermitian()).toBeTruthy()
  })
})

describe('S', () => {
  test('toString', () => {
    expect(S.toString()).toBe('{{1, 0}, {0, i}}')
  })

  test('isHermitian', () => {
    expect(S.isHermitian()).toBeFalsy()
  })
})
