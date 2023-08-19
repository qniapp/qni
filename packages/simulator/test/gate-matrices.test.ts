import {H, X, Y, Z} from '../src/gate-matrices'

describe('H', () => {
  test('toString', () => {
    expect(H.toString()).toBe('{{√½, √½}, {√½, -√½}}')
  })

  // TODO: isApproximatelyHermitian → isHermitian に名前を変更
  // TODO: isHermitian のデフォルト引数を 0 にする
  test('isApproximatelyHermitian', () => {
    expect(H.isApproximatelyHermitian(0)).toBeTruthy()
  })
})

describe('X', () => {
  test('toString', () => {
    expect(X.toString()).toBe('{{0, 1}, {1, 0}}')
  })

  test('isApproximatelyHermitian', () => {
    expect(X.isApproximatelyHermitian(0)).toBeTruthy()
  })
})

describe('Y', () => {
  test('toString', () => {
    expect(Y.toString()).toBe('{{0, -i}, {i, 0}}')
  })

  test('isApproximatelyHermitian', () => {
    expect(Y.isApproximatelyHermitian(0)).toBeTruthy()
  })
})

describe('Z', () => {
  test('toString', () => {
    expect(Z.toString()).toBe('{{1, 0}, {0, -1}}')
  })

  test('isApproximatelyHermitian', () => {
    expect(Z.isApproximatelyHermitian(0)).toBeTruthy()
  })
})
